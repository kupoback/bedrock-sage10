<?php

namespace App\Fields\Partials;

use Log1x\AcfComposer\Partial;
use StoutLogic\AcfBuilder\FieldsBuilder;

class Banner extends Partial
{

    public static function fieldNames()
    :array
    {
        return [
            'banner_title',
            'banner_subtitle',
        ];
    }

    /**
     * The partial field group.
     *
     * @return array
     */
    public function fields()
    {
        $banner = new FieldsBuilder('banner');

        $banner
            ->addTab('Banner')
            ->addText('banner_title', ['label' => 'Title Override'])
            ->addText('banner_subtitle', ['label' => 'Sub Title']);

        return $banner;
    }
}
