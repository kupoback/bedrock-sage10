<?php

namespace App\Blocks;

use JetBrains\PhpStorm\ArrayShape;
use Log1x\AcfComposer\Block;
use StoutLogic\AcfBuilder\FieldNameCollisionException;
use StoutLogic\AcfBuilder\FieldsBuilder;

class About extends Block
{
    /**
     * The block name.
     *
     * @var string
     */
    public $name = 'About';

    /**
     * The block description.
     *
     * @var string
     */
    public $description = 'A simple About block.';

    /**
     * The block category.
     *
     * @var string
     */
    public $category = 'formatting';

    /**
     * The block icon.
     *
     * @var string|array
     */
    public $icon = 'editor-ul';

    /**
     * The block keywords.
     *
     * @var array
     */
    public $keywords = [];

    /**
     * The block post type allow list.
     *
     * @var array
     */
    public $post_types = [];

    /**
     * The parent block type allow list.
     *
     * @var array
     */
    public $parent = [];

    /**
     * The default block mode.
     *
     * @var string
     */
    public $mode = 'preview';

    /**
     * The default block alignment.
     *
     * @var string
     */
    public $align = '';

    /**
     * The default block text alignment.
     *
     * @var string
     */
    public $align_text = '';

    /**
     * The default block content alignment.
     *
     * @var string
     */
    public $align_content = '';

    /**
     * The supported block features.
     *
     * @var array
     */
    public $supports = [
        'align' => true,
        'align_text' => false,
        'align_content' => false,
        'full_height' => false,
        'anchor' => false,
        'mode' => false,
        'multiple' => true,
        'jsx' => true,
    ];

    /**
     * The block styles.
     *
     * @var array
     */
    public $styles = [
        [
            'name' => 'light',
            'label' => 'Light',
            'isDefault' => true,
        ],
        [
            'name' => 'dark',
            'label' => 'Dark',
        ]
    ];

    /**
     * The block preview example data.
     *
     * @var array
     */
    public $example = [
        'title' => 'Hello There',
        'image' => '',
    ];

    /**
     * Data to be passed to the block before rendering.
     *
     * @return array
     */
    public function with()
    :array
    {
        return [
            'title' => $this->title(),
            'image' => $this->image()
        ];
    }

    /**
     * The block field group.
     *
     * @return array
     *
     * @throws FieldNameCollisionException
     */
    public function fields()
    :array
    {
        $about = new FieldsBuilder('about');

        $about
            ->addText('title')
            ->addImage('image', ['return_format' => 'id']);

        return $about->build();
    }

    /**
     * Return the items field.
     *
     * @return string
     */
    public function title()
    :string
    {
        return get_field('title') ?: '';
    }

    /**
     * Grabs the image ID if defined
     *
     * @return mixed|string
     */
    public function image()
    :mixed
    {
        return get_field('image') ?: '';
    }

    /**
     * Assets to be enqueued when rendering the block.
     *
     * @return void
     */
    public function enqueue()
    :void
    {
        //
    }
}
