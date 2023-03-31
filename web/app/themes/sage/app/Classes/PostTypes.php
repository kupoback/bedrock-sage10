<?php

namespace App\Classes;

use App\Traits\SageAdminTrait;

/**
 * This Class allows for the one spot ease of
 * registering Post Types for the site
 */
class PostTypes
{

    use SageAdminTrait;

    /**
     * Registers the post types
     */
    public function __construct()
    {
        $post_types = [
            // Post Type Name => Post Type Registration Method
            'events' => $this->eventsPostType(), //example
        ];

        if (!empty($post_types)) {
            add_action('init', fn() => collect($post_types)
                ->each(function ($pt_args, $pt_name) {
                    register_post_type($pt_name, $pt_args);
                }));
            // Flush the permalinks
            // flush_rewrite_rules();
        }
    }

    /**
     * Sets up the Team post type
     *
     * @return array
     * @link Dashicon https://developer.wordpress.org/resource/dashicons
     */
    public function eventsPostType()
    :array
    {
        return self::postTypeArray(
            'Events',
            'dashicons-tickets-alt',
            __("This post type is used for managing the events on the site", "sage"),
            'post',
            [
                'menu_position' => 29,
                'has_archive'   => true,
            ]
        );
    }
}
