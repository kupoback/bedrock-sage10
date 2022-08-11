<?php

namespace App\View\Composers;

use App\SageThemeModule\AcfNestedFields;
use Roots\Acorn\View\Composer;
use App\Fields\About as AboutFields;

class About extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'banners.about-banner',
        'partials.content-about',
    ];

    public function __construct()
    {
        $this->acf = (new AcfNestedFields(AboutFields::fieldNames()))
            ->getFields();
    }

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
    :array
    {
        return $this->acf;
    }
}
