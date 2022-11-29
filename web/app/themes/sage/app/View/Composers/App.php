<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

use function Roots\bundle;

class App extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        '*',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
    :array
    {
        return [
            'siteName'  => $this->siteName(),
            'pageTitle' => $this->pageTitle(),
        ];
    }

    /**
     * Returns the site name.
     *
     * @return string
     */
    public function siteName()
    :string
    {
        return get_bloginfo('name', 'display');
    }

    /**
     * Returns the page title
     *
     * @return array|string|null
     */
    public function pageTitle()
    :array|string|null
    {
        if (is_search()) {
            return __("Search", 'sage');
        } elseif (is_archive()) {
            return get_the_archive_title();
        }

        return get_the_title();
    }
}
