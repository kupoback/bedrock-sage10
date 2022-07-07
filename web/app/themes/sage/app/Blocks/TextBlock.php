<?php

namespace App\Blocks;

use Log1x\AcfComposer\Block;
use StoutLogic\AcfBuilder\FieldNameCollisionException;
use StoutLogic\AcfBuilder\FieldsBuilder;

class TextBlock extends Block
{

    /**
     * The block name.
     *
     * @var string
     */
    public $name = 'Text Block';

    /**
     * The block description.
     *
     * @var string
     */
    public $description = 'A simple Text Block block.';

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
        'align'         => true,
        'align_text'    => false,
        'align_content' => false,
        'full_height'   => false,
        'anchor'        => false,
        'mode'          => false,
        'multiple'      => true,
        'jsx'           => true,
    ];

    /**
     * The block styles.
     *
     * @var array
     */
    public $styles = [
        [
            'name'      => 'light',
            'label'     => 'Light',
            'isDefault' => true,
        ],
        [
            'name'  => 'dark',
            'label' => 'Dark',
        ],
    ];

    /**
     * The block preview example data.
     *
     * @var array
     */
    public $example = [];

    /**
     * Field Names used for this block
     * @var array|string[]
     */
    public array $fieldNames = [
        'title',
        'content',
        'items',
        'cta',
        'image',
    ];

    /**
     * Data to be passed to the block before rendering.
     *
     * @return array
     */
    public function with()
    :array
    {
        return self::acfFields();
    }

    /**
     * The block field group.
     *
     * @return array
     * @throws FieldNameCollisionException
     */
    public function fields()
    :array
    {
        $textBlock = new FieldsBuilder('text_block');

        $textBlock
            ->addText('title')
            ->addWysiwyg('content')
            ->addLink('cta')
            ->addImage('image', ['return_format' => 'id'])
            ->addRepeater('items')
                ->addText('item')
            ->endRepeater();

        return $textBlock->build();
    }

    /**
     * Maps through the field names defined and grabs their get_field
     *
     * @return array
     */
    public function acfFields()
    :array
    {
        return collect($this->fieldNames)
            ->mapWithKeys(fn($field) => [
                $field => get_field($field) ?: ($this->example[$field] ?? false),
            ])
            ->filter()
            ->toArray();
    }

    /**
     * Assets to be enqueued when rendering the block.
     *
     * @return void
     */
    public function enqueue()
    {
        //
    }
}
