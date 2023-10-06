<?php

namespace App\View\Composers;

use App\Classes\AcfNestedFields;
use Roots\Acorn\View\Composer;

class Error404 extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var string[]
     */
    protected static $views = [
        'partials.page-header',
        '404',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function override()
    :array
    {
        $data = static::optionsData();

        return [
            'title' => $data['error_title'],
            'image' => $data['error_image'],
            'content' => $data['error_content']
        ];
    }

    /**
     * Fetches the Theme Settings data
     *
     * @return array
     */
    public function optionsData()
    :array
    {
        return (new AcfNestedFields(
            [
                'error_title',
                'error_content',
                'error_image',
            ],
            'sage_theme'
        ))
            ->getFields();
    }
}
