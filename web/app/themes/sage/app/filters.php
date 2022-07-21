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

if (class_exists('ACF')) {
    // add_filter('acf/settings/show_admin', '__return_false');
}

/**
 * Sets the location in the theme folder to save Field Group JSON files to
 */
add_filter('acf/settings/save_json', fn() => get_template_directory() . '/acf-json');

/**
 * Set the location in the theme folder to import Field Group JSON files from
 */
add_filter('acf/settings/load_json', function ($paths) {
    unset($paths[0]);
    $paths[] = get_template_directory() . '/acf-json';
    return $paths;
});