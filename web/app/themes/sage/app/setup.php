<?php

/**
 * Theme setup.
 */

namespace App;

use function Roots\bundle;

/**
 * Register the theme assets.
 *
 * @return void
 */
add_action('wp_enqueue_scripts', function () {
    // Uncomment to enable React or Vue on the site
    // bundle('sageReact')->enqueue();
    // bundle('vue')->enqueueJs();
    bundle('app')->enqueue();
}, 100);

/**
 * Register the theme assets with the block editor.
 *
 * @return void
 */
add_action('enqueue_block_editor_assets', function () {
    // Uncomment to enable React or Vue on the site
    // bundle('sageReact')->enqueue();
    // bundle('vue')->enqueueJs();
    bundle('editor')->enqueue();
}, 100);

/**
 * Registers an option CSS file and JS file for use within the wp-admin.
 * Contains some "nice" styles for ACF, and there's an empty JS file.
 * Uncomment to use
 *
 * @return void
 */
add_action('admin_enqueue_scripts', function () {
    bundle('admin')->enqueue();
}, 100);

/**
 * Register the initial theme setup.
 *
 * @return void
 */
add_action('after_setup_theme', function () {
    /**
     * Enable features from the Soil plugin if activated.
     * @link https://roots.io/plugins/soil/
     */
    add_theme_support('soil', [
        'clean-up',
        'nav-walker',
        'nice-search',
        'relative-urls',
    ]);

    /**
     * Disable full-site editing support.
     *
     * @link https://wptavern.com/gutenberg-10-5-embeds-pdfs-adds-verse-block-color-options-and-introduces-new-patterns
     */
    remove_theme_support('block-templates');

    /**
     * Register the navigation menus.
     *
     * @link https://developer.wordpress.org/reference/functions/register_nav_menus/
     */
    register_nav_menus(
        [
            'primary_navigation' => __('Primary Navigation', 'sage'),
            'footer_navigation'  => __('Footer Navigation', 'sage'),
        ]
    );

    /**
     * Disable the default block patterns.
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#disabling-the-default-block-patterns
     */
    remove_theme_support('core-block-patterns');

    /**
     * Enable plugins to manage the document title.
     * @link https://developer.wordpress.org/reference/functions/add_theme_support/#title-tag
     */
    add_theme_support('title-tag');

    /**
     * Enable post thumbnail support.
     * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
     */
    add_theme_support('post-thumbnails');

    /**
     * Enable responsive embed support.
     * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/themes/theme-support/#responsive-embedded-content
     */
    add_theme_support('responsive-embeds');

    /**
     * Enable HTML5 markup support.
     * @link https://developer.wordpress.org/reference/functions/add_theme_support/#html5
     */
    add_theme_support('html5', [
        'caption',
        'comment-form',
        'comment-list',
        'gallery',
        'search-form',
        'script',
        'style',
    ]);

    /**
     * Enable selective refresh for widgets in customizer.
     * @link https://developer.wordpress.org/themes/advanced-topics/customizer-api/#theme-support-in-sidebars
     */
    add_theme_support('customize-selective-refresh-widgets');

    /**
     * Updates and sets the WordPress image sizes
     */
    $options = [
        'thumbnail_size_w'    => 300,
        'thumbnail_size_h'    => 0,
        'thumbnail_crop'      => 0,
        'medium_size_w'       => 768,
        'medium_size_h'       => 0,
        'medium_large_size_w' => 1024,
        'medium_large_size_h' => 0,
        'large_size_w'        => 1280,
        'large_size_h'        => 0,
    ];

    collect($options)
        ->each(function ($opt_val, $opt_key) {
            update_option($opt_key, $opt_val, true);
        });

    /**
     * Adds a 1920w banner image size.
     * Change the width if supporting browser size higher than 1920
     */
    add_image_size('banner', 1920, 0, 0);
}, 20);

/**
 * Register the theme sidebars.
 *
 * @return void
 */
add_action('widgets_init', function () {
    $config = [
        'before_widget' => '<section class="widget %1$s %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h3>',
        'after_title' => '</h3>',
    ];

    register_sidebar([
        'name' => __('Primary', 'sage'),
        'id' => 'sidebar-primary',
    ] + $config);

    register_sidebar([
        'name' => __('Footer', 'sage'),
        'id' => 'sidebar-footer',
    ] + $config);
});

/**
 * Disable Emoji's
 */
add_action('init', function () {
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_action('admin_print_styles', 'print_emoji_styles');
    remove_filter('the_content_feed', 'wp_staticize_emoji');
    remove_filter('comment_text_rss', 'wp_staticize_emoji');
    remove_filter('wp_mail', 'wp_staticize_emoji_for_email');

    /**
     * Filter out the tinymce emoji plugin.
     */

    add_filter('tiny_mce_plugins', fn ($plugins) => is_array($plugins)
        ? array_diff($plugins, ['wpemoji'])
        : []);
});

// Adds the ACF Nav menu custom field to the selectable options
class_exists('ACF')
    && add_action('acf/include_field_types', fn () => include_once 'Classes/AcfNavMenu.php');
