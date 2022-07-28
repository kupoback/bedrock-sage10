<?php

namespace App\Fields;

use App\Fields\Partials\Banner;
use Log1x\AcfComposer\Field;
use StoutLogic\AcfBuilder\FieldNameCollisionException;
use StoutLogic\AcfBuilder\FieldsBuilder;

class About extends Field
{
    public static function fieldNames()
    :array
    {
        return [
            ...Banner::fieldNames(),
            'about_title',
            'about_content',
            'about_cta',
            'about_image',
        ];
    }

    /**
     * The field group.
     *
     * @return array
     * @throws FieldNameCollisionException
     */
    public function fields()
    :array
    {
        $about = new FieldsBuilder('about');

        $about
            ->setLocation('page_template', '==', 'template-about.blade.php');

        $about
            ->addFields($this->get(Banner::class))
            ->addTab('About Section')
            ->addText('about_title', ['label' => 'Title'])
            ->addWysiwyg('about_content', ['label' => 'Content'])
            ->addLink('about_cta')
            ->addImage('about_image')
        ;


        return $about->build();
    }
}
