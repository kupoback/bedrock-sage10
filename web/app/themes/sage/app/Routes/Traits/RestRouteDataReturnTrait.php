<?php

namespace App\Routes\Traits;

use App\Helper\Helper;
use App\Helper\ImageHelper;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;

trait RestRouteDataReturnTrait
{
    /**
     * Our return loop of post data
     *
     * @param  array  $posts  The posts object
     *
     * @return Collection|void
     */
    protected function renderPosts(array $posts)
    {
        if (!$posts) {
            return;
        }

        return collect($posts)
            ->map(function ($post) {
                $post_date  = new Carbon($post->post_date);
                $image      = has_post_thumbnail($post) ? ImageHelper::generateImgData(get_post_thumbnail_id($post)) : [];
                $excerpt    = (!empty($post->post_excerpt) ? $post->post_excerpt : $post->post_content);
                $categories = wp_get_post_categories($post->ID, ['fields' => 'names']);

                return [
                    'author'     => get_the_author_meta('display_name', $post->post_author),
                    'categories' => $categories && !is_wp_error($categories) ? collect($categories)->first() : '',
                    'date'       => [
                        'year' => $post_date->format('Y'),
                        'date' => $post_date->format('M j')
                    ],
                    'excerpt'    => html_entity_decode(Helper::generateExcept($excerpt, 25)),
                    'id'         => $post->ID,
                    'image'      => (object) $image,
                    'permalink'  => get_the_permalink($post),
                    'sticky'     => is_sticky($post->ID),
                    'title'      => $post->post_title,
                ];
            });
    }



    /**
     * Parses the menu item for return formatting
     *
     * @param  object  $item  The menu item
     * @param  array   $opts  Any additional arguments to parse
     *
     * @return array
     */
    private function parseNavItem(object $item, array $opts = [])
    :array
    {
        $default_classes = [
            'menu-item',
            (int) $item->menu_item_parent === 0 ? 'menu-item-parent' : 'menu-item-child',
        ];
        $addt_class      = $opts['addt_class'] ?? '';
        $classes         = wp_parse_args($addt_class, $default_classes);

        return [
            'classes'   => implode(' ', $classes),
            'id'        => $item->ID, // The 'post id' of the item in nav_menu_item post type
            'objId'     => $item->object_id, // The 'post id' of the item's default post type
            'permalink' => $item->url,
            'target'    => $item->target,
            'title'     => $item->title,
            'parent'    => (int) $item->menu_item_parent,
        ];
    }
}
