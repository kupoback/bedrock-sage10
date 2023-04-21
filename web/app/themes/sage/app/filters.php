<?php

/**
 * Theme filters.
 */

namespace App;

/**
 * Add "… Continued" to the excerpt.
 *
 * @return string
 */
add_filter('excerpt_more', fn() => sprintf(' &hellip; <a href="%s">%s</a>', get_permalink(), __('Continued', 'sage')));

// if (class_exists('ACF') && get_current_user_id() !== env('SUPER_ADMIN_ID')) {
//     add_filter('acf/settings/show_admin', '__return_false');
// }

/**
 * This filter adds a "Sage Theme" Category for custom blocks,
 * and sets it to the top most level so that it is more easily accessible
 */
add_filter('block_categories_all', fn ($categories) => collect($categories)
    ->prepend(
        [
            'slug'  => 'sage-theme',
            'title' => 'Sage Theme Blocks',
        ],
    )
    ->toArray());

/**
 * Function that will load all post types for any select field needed
 * @param $field
 *
 * @return array
 */
function loadPostTypeChoices($field)
:array
{

    $field['choices'] = collect(get_post_types(['public' => true], 'objects'))
        ->forget('attachment')
        ->mapWithKeys(fn ($post_type) => [$post_type->name => $post_type->label])
        ->sort()
        ->toArray();

    return $field;
}

// Can duplicate this line, changing the name to whatever is needed
add_filter('acf/load_field/name=post_types', __NAMESPACE__ . '\\loadPostTypeChoices');
