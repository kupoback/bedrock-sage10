<?php

namespace App\View\Composers;

use App\Classes\AcfNestedFields;
use App\Traits\SageTrait;
use Illuminate\Support\Collection;
use Roots\Acorn\View\Composer;

use function Roots\bundle;

class Search extends Composer
{
    use SageTrait;

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
        return static::fixKeyNames(
            static::setupSearch(),
            'search'
        )->toArray();
    }


    /**
     * Sets up the search fields
     *
     * @return Collection
     */
    public function setupSearch()
    :Collection
    {
        return (new AcfNestedFields(
            [
                'search_title',
                'search_results'
            ],
            'sage_theme'
        ))
            ->setupFields()
            ->filter();
    }
}
