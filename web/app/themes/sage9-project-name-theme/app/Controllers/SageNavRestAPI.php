<?php

// declare(strict_types = 1);

namespace App\Controllers;

/**
 * Class Name: SageNavRestAPI
 * Description: A basic class to parse and return the navigation items for Vue
 * Class SageNavRestAPI
 *
 * @package App\Controllers\SageNavRestApi
 */
class SageNavRestAPI
{
    
    /**
     * Endpoint Namespace
     *
     * @var string
     */
    protected $namespace;
    
    /**
     * MoralesRestAPI constructor.
     */
    public function __construct()
    {
        add_action('rest_api_init', [$this, 'registerRoutes',]);
    }
    
    /**
     * Creates the API Endpoing in Wordpress
     */
    public function registerRoutes()
    {
        $this->namespace = 'navigation/v1';
        
        /**
         * Grabs the navigation items
         */
        register_rest_route($this->namespace, '/get-nav', [
            'methods'  => \WP_REST_Server::READABLE,
            'callback' => [$this, 'populateNav'],
        ]);
    }
    
    /**
     * Returns an array of navigation items
     *
     * @param \WP_REST_Request $request
     *
     * @return mixed|\WP_Error|\WP_HTTP_Response|\WP_REST_Response
     */
    public function populateNav(\WP_REST_Request $request)
    {
        $return_menu = [];
        
        // Used for changing the navigation array return if design calls for a unique layout on mobile/tablet
        $viewport = $request['viewport'];
        
        // Which navigation to get
        $nav_id   = $request['navID'];
        $get_menu = wp_get_nav_menu_items($nav_id);
        
        if (!is_wp_error($get_menu) && !empty($get_menu)) {
            $parse_items = collect($get_menu)
                ->map(function ($item) {
                    return self::parseNavItem($item);
                })
                ->groupBy('parent');
            
            $return_menu = collect($parse_items)
                ->first()
                ->map(function ($item) use ($parse_items) {
                    $item['children'] = $parse_items[$item['id']] ?? [];
                    ;
                    return $item;
                })
                ->toArray();
        }
        
        return rest_ensure_response($return_menu);
    }
    
    /**
     * Parses the menu item for return formatting
     *
     * @param object $item The menu item
     * @param array  $opts Any additional arguments to parse
     *
     * @return array
     */
    private function parseNavItem($item, $opts = [])
    {
        $default_classes = [
            'menu-item',
            (int) $item->menu_item_parent === 0 ? 'menu-item-parent' : 'menu-item-child',
        ];
        $addt_class = $opts['addt_class'] ?? '';
        $classes = wp_parse_args($addt_class, $default_classes);
        
        return [
            'classes'          => implode(' ', $classes),
            'id'               => $item->ID, // The 'post id' of the item in nav_menu_item post type
            'objId'            => $item->object_id, // The 'post id' of the item's default post type
            'permalink'        => $item->url,
            'target'           => $item->target,
            'title'            => $item->title,
            'parent'           => (int) $item->menu_item_parent,
        ];
    }
}
