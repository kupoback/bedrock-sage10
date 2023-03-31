<?php

declare(strict_types=1);

namespace App\Routes;

# Sage Classes
use App\Routes\Traits\RestRouteTrait;
use App\Routes\Traits\RestRouteDataReturnTrait;

# WordPress
use WP_Error;
use WP_HTTP_Response;
use WP_REST_Request;
use WP_REST_Response;
use WP_REST_Server;


/**
 * Class Name: SageNavRestAPI
 * Description: A basic class to parse and return the navigation items for Vue
 * Class SageNavRestAPI
 *
 * @package App\Routes\SageNavRestApi
 */
class SageNavRestAPI
{
    use RestRouteDataReturnTrait;
    use RestRouteTrait;

    /**
     * MoralesRestAPI constructor.
     */
    public function __construct()
    {
        add_action('rest_api_init', [$this, 'registerRoutes',]);
    }

    /**
     * Creates the API Endpoint in WordPress
     */
    public function registerRoutes()
    :void
    {
        /**
         * Grabs the navigation items
         */
        self::registerRoute(
            'get-nav',
            WP_REST_Server::READABLE,
            [$this, 'navWOChildren'],
        );


        /**
         * Grabs the navigation items with children mapped
         */
        self::registerRoute(
            'get-nav-with-children',
            WP_REST_Server::READABLE,
            [$this, 'navWithChildren'],
        );
    }

    /**
     * Returns an array of navigation items without their children
     *
     * @param  WP_REST_Request  $request
     *
     * @return WP_Error|WP_HTTP_Response|WP_REST_Response
     */
    public function navWOChildren(WP_REST_Request $request)
    :WP_Error|WP_REST_Response|WP_HTTP_Response
    {
        $return_menu = [];

        // Used for changing the navigation array return if design calls for a unique layout on mobile/tablet
        $viewport = $request['viewport'];

        // Which navigation to get
        $menu_location = $request['navLocation'];
        $get_menu_name = wp_get_nav_menu_name($menu_location);
        $get_menu      = wp_get_nav_menu_items($get_menu_name);

        if (!is_wp_error($get_menu) && !empty($get_menu)) {
            $return_menu = collect($get_menu)
                ->map(fn ($the_item) => (int) $the_item->menu_item_parent === 0
                    ? self::parseNavItem($the_item)
                    : false)
                ->filter()
                ->values();
        }

        return rest_ensure_response($return_menu);
    }

    /**
     * Returns an array of navigation items with children
     *
     * @param  WP_REST_Request  $request
     *
     * @return WP_Error|WP_HTTP_Response|WP_REST_Response
     */
    public function navWithChildren(WP_REST_Request $request)
    :WP_Error|WP_REST_Response|WP_HTTP_Response
    {
        $return_menu = [];

        // Used for changing the navigation array return if design calls for a unique layout on mobile/tablet
        $viewport = $request['viewport'];

        // Which navigation to get
        $menu_location = $request['navLocation'];
        $get_menu_name = wp_get_nav_menu_name($menu_location);
        $get_menu      = wp_get_nav_menu_items($get_menu_name);

        if (!is_wp_error($get_menu) && !empty($get_menu)) {
            $parse_items = collect($get_menu)
                ->map(fn ($item) => self::parseNavItem($item))
                ->groupBy('parent');

            $return_menu = collect(collect($parse_items)->first())
                ->map(function ($the_item) use ($parse_items) {
                    $the_item['children'] = $parse_items[$the_item['id']] ?? [];

                    return $the_item;
                })
                ->toArray();
        }

        return rest_ensure_response($return_menu);
    }
}
