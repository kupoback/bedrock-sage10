<?php

namespace App\Blocks;

use App\Classes\AcfNestedFields;
use Log1x\AcfComposer\Block;
use StoutLogic\AcfBuilder\FieldNameCollisionException;
use StoutLogic\AcfBuilder\FieldsBuilder;

use function Roots\bundle;

class PostListing extends Block
{
    /**
     * The block name.
     *
     * @var string
     */
    public $name = 'Post Listing';

    /**
     * The block description.
     *
     * @var string
     */
    public $description = 'A block for displaying Posts with a JS Framework';

    /**
     * The block category.
     *
     * @var string
     */
    public $category = 'sage-theme';

    /**
     * The block icon. Omit the `dashicon-` portion
     *
     * @var null|string
     * @link WordPressIcons https://developer.wordpress.org/resource/dashicons/
     */
    public $icon = 'list-view';

    /**
     * The block keywords.
     *
     * @var array
     */
    public $keywords = ['post-listing',];

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
     *
     * @example inline  Edit within editor
     * @example preview Edit in the sidebar
     */
    public $mode = 'inline';

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
     * The field names defined in $this->fields()
     *
     * @var array
     */
    public array $fieldNames = [
         'title',
         'content',
         'results',
         'post_labels',
         'no_results',
         'post_filters',
     ];

    /**
     * Data to be passed to the block before rendering.
     * This method uses the AcfNestedFields Class to return an array
     * with ->getFields(), but can be replaced with ->setupFields()
     * instead if you need to hook into the Collection to manipulate
     * the data output of the array items, like Post Objects
     *
     * @return array
     */
    public function with()
    :array
    {
        $fields = (new AcfNestedFields($this->fieldNames))
            ->setupFields();

        $fields
            ->put(
                'taxonomy',
                $this
                    ->getTaxonomy($fields->get('post_filters')->filter_type ?? false)
            );

        return $fields
            ->put('localized', bundle('posts'))
            ->toArray();
    }

    /**
     * The block field group.
     *
     * @return array
     * @throws FieldNameCollisionException
     * @link https://github.com/Log1x/acf-builder-cheatsheet
     */
    public function fields()
    :array
    {
        $blogListing = new FieldsBuilder('post_listing');

        $blogListing
            ->addText('title')

            ->addWysiwyg('content')

            ->addText('results')
                ->setDefaultValue(__('Results', 'sage'))

            ->addGroup('post_labels')
                ->addText('category')
                    ->setDefaultValue(__('Category', 'sage'))
                    ->setAttr('class', 'one-half')
                ->addText('view_more')
                    ->setDefaultValue(__('View More', 'sage'))
                    ->setAttr('class', 'one-half')
            ->endGroup()

            ->addSelect('post_types')
                ->setConfig('multiple', true)
                ->setConfig('allow_null', false)
                ->setDefaultValue(['post'])
            
            ->addTextarea('no_results')
                ->setConfig('rows', 4)

            ->addGroup('post_filters')
                ->addText('filter_label', ['default_value' => __('Filter By', 'sage')])
                    ->setDefaultValue(__('Filter By', 'sage'))
                ->addSelect('filter_type')
                    ->addChoices(['category' => "Categories", 'tags' => "Tags"])
                    ->setConfig('allow_null', true)
                ->addText('search_label')
                    ->setDefaultValue(__('Search', 'sage'))
                ->addText('search_placeholder')
                    ->setDefaultValue(__('Enter in a keyword', 'sage'))
                ->addText('filter_search')
                    ->setDefaultValue(__('Search', 'sage'))
            ->endGroup();

        return $blogListing->build();
    }

    public function getTaxonomy(string $taxonomy_name = 'categories')
    :bool|string
    {
        $taxonomy_type = $taxonomy_name;
        if ($taxonomy_type) {
            return collect(get_terms(['taxonomy' => $taxonomy_type]))
                ->filter()
                ->map(fn ($term) => ['id' => $term->term_id, 'name' => $term->name, 'slug' => $term->slug]);
        }
        return '';
    }

    /**
     * Assets to be enqueued when rendering the block.
     *
     * @return void
     */
    public function enqueue()
    :void
    {
        bundle('posts')
            ->enqueueJs();
    }
}
