<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

class App extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array<string>
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
            'site_name'  => get_bloginfo('name', 'display'),
            'site_url'   => static::siteUrl(),
            'title'      => static::getTitle(),
        ];
    }

    /**
     * Returns a conditional based page title
     *
     * @return string|null
     */
    public function getTitle()
    :?string
    {
        if (is_home()) {
            $homepage = get_option('page_for_posts', true);
            if ($homepage) {
                return get_the_title($homepage);
            }

            return __('Latest Posts', 'sage');
        }
        if (is_archive()) {
            return get_the_archive_title();
        }
        if (is_search()) {
            return sprintf(__('Search Results for %s', 'sage'), get_search_query());
        }
        if (is_404()) {
            return __('Not Found', 'sage');
        }

        return get_the_title();
    }

    /**
     * Returns the sites home url
     *
     * @return string|null
     */
    public function siteUrl()
    :?string
    {
        return get_home_url();
    }
}
