<?php

namespace App\Blocks;

use App\SageThemeModule\AcfNestedFields;
use Log1x\AcfComposer\Block;
use StoutLogic\AcfBuilder\FieldNameCollisionException;
use StoutLogic\AcfBuilder\FieldsBuilder;

class TeamListing extends Block
{
    /**
     * The block name.
     *
     * @var string
     */
    public $name = 'Team Listing';

    /**
     * The block description.
     *
     * @var string
     */
    public $description = 'A simple Team Listing block.';

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
    public $example = [];
    
    /**
     * Field Names used for this block
     * @var array|string[]
     */
    public array $fieldNames = [
        'title',
        'team',
    ];
    
    /**
     * Data to be passed to the block before rendering.
     *
     * @return array
     */
    public function with()
    :array
    {
        return (new AcfNestedFields($this->fieldNames))
            ->getFields();
    }
    
    /**
     * The block field group.
     *
     * @link ReferenceGuide https://github.com/Log1x/acf-builder-cheatsheet/blob/master/README.md
     *
     * @return array
     * @throws FieldNameCollisionException
     */
    public function fields()
    :array
    {
        $posts = new FieldsBuilder('posts');
        
        $posts
            ->addText('title')
            ->addRelationship(
                'team',
                [
                    'post_type' => 'team',
                    'min' => 1,
                    'max' => 9,
                ]
            );
        
        return $posts->build();
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
