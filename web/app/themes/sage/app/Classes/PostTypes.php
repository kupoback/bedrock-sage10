<?php

namespace App\Classes;

use App\Traits\SageAdminTrait;

class PostTypes
{

    use SageAdminTrait;

    /**
     * Registers the post types
     */
    public function __construct()
    {
        $post_types = [
            // 'team' => $this->teamPostType(),
        ];

        if (!empty($post_types)) {
            add_action('init', fn() => collect($post_types)
                ->each(fn($pt_args, $pt_name) => register_post_type($pt_name, $pt_args)));
            // Flush the permalinks
            // flush_rewrite_rules();)
        }
    }

    /**
     * Sets up the Team post type
     *
     * @return array
     */
    public function teamPostType()
    :array
    {
        return self::postTypeArray(
            'Team',
            'dashicons-groups',
            __("This post type is used for managing the team members on the site", "sage"),
            'post',
            [
                'menu_position' => 29,
                'has_archive'   => false,
            ]
        );
    }
}
