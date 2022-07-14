<?php

namespace App\Classes;

/**
 * Return if Shortcodes already exists.
 */
if (class_exists('Shortcodes')) {
    return;
}

/**
 * Shortcodes
 */
class Shortcodes
{

    /**
     * Constructor
     */
    public function __construct()
    {
        $shortcodes = [
            'sitemap',
        ];

        return collect($shortcodes)
            ->map(function ($shortcode) {
                return add_shortcode($shortcode, [$this, strtr($shortcode, ['-' => '_']),]);
            });
    }

    /**
     * A shortcode that outputs a formatted list of pages
     *
     * @param array $atts         {
     *                            Optional. Array or string of arguments to generate a list of pages. See `get_pages()` for additional arguments.
     *
     * @type string $post_type    The post type to override returning.
     *                                  Default page
     * @type string $exclude      Comma-separated list of page IDs to exclude. Default empty.
     * @type string $omit_current Whether to omit the current page or not
     *                                  Default yes
     * @type string $orderby      Comma-separated list of column names to sort the pages by. Accepts 'post_author',
     *                                  'post_date', 'post_title', 'post_name', 'post_modified', 'post_modified_gmt',
     *                                  'menu_order', 'post_parent', 'ID', 'rand', or 'comment_count'. Default 'post_title'.
     * @type string $order        Sets whether the order should be in ascending or descending order
     *                                  Default ASC
     * @type string $post_status  The post_status of posts to return
     *                                  Default publish
     * }
     *
     * @return string
     */
    public function sitemap(array $atts = [])
    :string
    {

        $defaults = [
            'post_type'    => 'page',
            'exclude'      => '',
            'omit_current' => 'yes',
            'orderby'      => 'post_title',
            'order'        => 'ASC',
            'post_status'  => 'publish',
        ];

        $parsed_args = wp_parse_args($atts, $defaults);

        /**
         * The following was pulled from wp_list_pages
         *
         * @ref  wp_list_pages
         * @uses wp_list_pages
         */
        $parsed_args['exclude'] = preg_replace('/[^0-9,]/', '', $parsed_args['exclude']);

        $exclude_array = ($parsed_args['exclude']) ? explode(',', $parsed_args['exclude']) : [];

        // Omit the current page from the Sitemap
        if ($parsed_args['omit_current'] === 'yes') {
            $exclude_array[] = get_the_ID();
        };

        $parsed_args['exclude'] = implode(',', apply_filters('wp_list_pages_excludes', $exclude_array));

        $pages = get_pages($parsed_args);

        $page_list = $pages ? array_map(function ($page) {
            return sprintf(
                '<li class="page-link col-xs-12"><a href="%2$s">%1$s</a></li>',
                $page->post_title,
                get_permalink($page)
            );
        },
            $pages) : [];

        ob_start();
        /**
         * Returns HTML list of pages
         */
        $return = !empty($page_list) ?
            sprintf(
                '<div id="sitemap" class="sitemap-container container"><ul class="page-list row">%s</ul></div>',
                implode('', $page_list)
            )
            : '';

        /**
         * Return clean data
         */
        $return .= ob_get_clean();
        return $return;
    }
}
