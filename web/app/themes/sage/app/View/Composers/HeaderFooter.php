<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

class HeaderFooter extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var string[]
     */
    protected static $views = [
        //
        'sections.header',
        'sections.footer',
    ];

    /**
     * Data to be passed to the view before rendering.
     *
     * @return array
     */
    public function with()
    :array
    {
        return [
            'site_name'  => get_bloginfo('name', 'display'),
        ];
    }
}
