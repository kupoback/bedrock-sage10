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

        collect($shortcodes)
            ->each(function ($shortcode) {
                add_shortcode($shortcode, [$this, strtr($shortcode, ['-' => '_']),]);
            });
    }

    /**
     * A shortcode that outputs a formatted list of pages
     *
     * @param  array{post_type: string, exclude: string, omit_current:string, orderby: string, order: string, post_status: string} $attributes Optional. Array or string of arguments to generate a list of pages. See `get_pages()` for additional arguments.
     *
     * @type string $post_type            The post type to override returning. Defaults to page
     * @type string $exclude              Comma-separated list of page IDs to exclude. Defaults to empty.
     * @type string $omit_current         Whether to omit the current page or not. Defaults to yes
     * @type string $orderby              Comma-separated list of column names to sort the pages by. Accepts 'post_author',
     *                                    'post_date', 'post_title', 'post_name', 'post_modified', 'post_modified_gmt',
     *                                    'menu_order', 'post_parent', 'ID', 'rand', or 'comment_count'. Default 'post_title'.
     * @type string $order                Sets whether the order should be in ascending or descending order. Defaults to ASC
     * @type string $post_status          The post_status of posts to return. Defaults to publish
     *
     * @return string
     */
    public function sitemap(array $attributes = [
        'post_type'    => 'page',
        'exclude'      => '',
        'omit_current' => 'yes',
        'orderby'      => 'post_title',
        'order'        => 'ASC',
        'post_status'  => 'publish',
    ])
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

        $parsed_args = collect($defaults)
            ->merge($attributes);

        /**
         * The following was pulled from wp_list_pages
         *
         * @ref  wp_list_pages
         * @uses wp_list_pages
         */
        $parsed_args->put(
            'exclude',
            preg_replace(
                '/[^\d,]/',
                '',
                $parsed_args->get('exclude'),
            ),
        );

        $exclude_array = ($parsed_args['exclude']) ? explode(',', $parsed_args['exclude']) : [];

        // Omit the current page from the Sitemap
        if ($parsed_args['omit_current'] === 'yes') {
            $exclude_array[] = get_the_ID();
        };

        $parsed_args['exclude'] = implode(',', apply_filters('wp_list_pages_excludes', $exclude_array));

        $pages = collect(
            get_pages(
                $parsed_args->toArray()
            )
        );

        /**
         * Map through all the pages if we have any
         */
        if ($pages->isNotEmpty()) {
            ob_start();
            $return = sprintf(
                '<div id="sitemap" class="sitemap-container"><ul class="page-list row">%s</ul></div>',
                $pages
                    ->map(fn ($page) => sprintf(
                        '<li class="page-link"><a href="%2$s">%1$s</a></li>',
                        $page->post_title,
                        get_permalink($page),
                    ))
                    ->implode(''),
            );
            $return .= ob_get_clean();

            return $return;
        }

        return '';
    }
}
