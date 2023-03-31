<?php
/*
|--------------------------------------------------------------------------
| Default Field Type Settings
|--------------------------------------------------------------------------
|
| Here you can set default field group and field type configuration that
| is then merged with your field groups when they are composed.
|
| This allows you to avoid the repetitive process of setting common field
| configuration such as `ui` on every `trueFalse` field or your
| preferred `instruction_placement` on every `fieldGroup`.
|
*/

/**
 * Link to a cheatsheet
 *
 * @link https://github.com/Log1x/acf-builder-cheatsheet
 */
return [

    'defaults' => [
        'image'        => ['return_format' => 'id', 'preview_size' => 'thumbnail',],
        'gallery'      => ['return_format' => 'id',],
        'forms'        => ['return_format' => 'id'],
        'message'      => ['wrapper' => ['class' => 'no-label']],
        'nav_menu'     => ['container' => 'nav'],
        'repeater'     => ['layout' => 'block',],
        'select'       => ['ui' => 1],
        'tab'          => ['placement' => 'left'],
        'textarea'     => ['rows' => 4],
        'trueFalse'    => ['ui' => 1],
        'wysiwyg'      => [
            'delay' => 1,
            // Uncomment if you want default WYSIWYG to have no Media Select/Upload button
            // 'media_upload' => 0
        ],
    ],
];
