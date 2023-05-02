<?php

namespace App\View\Composers;

use App\Classes\AcfNestedFields;
use Roots\Acorn\View\Composer;

use function Roots\bundle;

class Search extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array<string>
     */
    protected static $views = [
        //
        'search'
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
    :array
    {
        return (new AcfNestedFields(['search_title', 'search_results'], 'theme_settings'))
            ->getFields();
    }
}
