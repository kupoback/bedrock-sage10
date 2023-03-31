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
