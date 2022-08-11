<?php

namespace App\View\Composers;

use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Translation\Translator;
use Roots\Acorn\View\Composer;

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
    {
        return [
            'siteName' => $this->siteName(),
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
     * @return array|Application|Translator|string|null
     */
    public function pageTitle()
    :array|string|Translator|Application|null
    {
        if (is_search()) {
            return __("Search", 'sage');
        } elseif (is_archive()) {
            return get_the_archive_title();
        }

        return get_the_title();
    }
}
