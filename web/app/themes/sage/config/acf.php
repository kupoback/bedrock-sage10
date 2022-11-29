<?php
/**
 * Default ACF Field Type Settings
 *
 * Here you can set default field group and field type configuration
 * that is then merged with your field groups when they are composed.
 *
 * This allows you to avoid the repetitive process of setting common field
 * configuration such as `ui` on every `trueFalse` field or your
 * preferred `instruction_placement` on every `fieldGroup`.
 *
 *
 */

return [
    'defaults' => [
        'image'        => ['return_format' => 'id'],
        'relationship' => ['filters' => ['search', 'taxonomy']],
        'repeater'     => ['layout' => 'block',],
        'select'       => ['ui' => 1],
        'tab'          => ['placement' => 'left'],
        'textarea'     => ['rows' => 4],
        'trueFalse'    => ['ui' => 1],
    ],
];
