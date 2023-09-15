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
        'checkbox' => ['layout' => 'horizontal',],
        'datePicker'     => [
            'display_format' => 'F j, Y g:i a',
            'return_format' => 'F j, Y g:i a',
        ],
        'dateTimePicker' => [
            'display_format' => 'F j, Y g:i a',
            'return_format' => 'F j, Y g:i a',
        ],
        'forms'          => ['return_format' => 'id'],
        'gallery'        => ['return_format' => 'id',],
        'group'          => ['layout' => 'block'],
        'image'          => ['return_format' => 'id', 'preview_size' => 'thumbnail',],
        'message'        => ['wrapper' => ['class' => 'no-label']],
        'nav_menu'       => ['container' => 'nav'],
        'radio'          => ['layout' => 'horizontal',],
        'repeater'       => ['layout' => 'block',],
        'select'         => ['ui' => 1],
        'tab'            => ['placement' => 'left'],
        'textarea'       => ['rows' => 4],
        'trueFalse'      => [
            'ui'          => 1,
            'ui_on_text'  => __("Enable", "sage-acf"),
            'ui_off_text' => __("Disable", "sage-acf"),
        ],
        'wysiwyg'        => [
            'delay' => 1,
            // Uncomment if you want default WYSIWYG to have no Media Select/Upload button
            // 'media_upload' => 0
        ],
    ],
];
