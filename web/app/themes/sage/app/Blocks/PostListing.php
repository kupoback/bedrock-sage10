<?php

namespace App\Blocks;

use App\Classes\AcfNestedFields;
use App\Traits\SageTrait;
use Illuminate\Support\Str;
use Log1x\AcfComposer\Block;
use Log1x\AcfComposer\Builder;

use StoutLogic\AcfBuilder\FieldNameCollisionException;

use function Roots\bundle;

class PostListing extends Block
{
    use SageTrait;

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
     * @var array|string
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
        'color' => [
            'background' => true,
            'text' => true,
            'gradient' => true,
        ],
    ];

    /**
     * The block styles.
     *
     * @var array
     */
    public $styles = ['light', 'dark'];

    /**
     * The block preview example data.
     *
     * @var array
     */
    public $example = [];

    /**
     * The block template.
     *
     * @var array
     */
    public $template = [];

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
        return (new AcfNestedFields($this->fieldNames))
            ->getFields();
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
        $blogListing = Builder::make('post_listing');

        $blogListing
            ->addText('title')
                ->setLabel(__("Listing Title", "sage-admin-text"))
            ->addWysiwyg('content')
                ->setLabel(__("Listing Content", "sage-admin-text"))
            ->addText('results')
                ->setDefaultValue(__('Results', 'sage'))
                ->setLabel(__("Results Count", "sage-admin-text"))

            ->addGroup('post_labels')
                ->addText('category')
                    ->setAttr('class', 'one-half')
                    ->setDefaultValue(__('Category', 'sage'))
                    ->setLabel(__("Category Title", "sage-admin-text"))
                ->addText('read_more')
                    ->setAttr('class', 'one-half')
                    ->setDefaultValue(__('Read All', 'sage'))
            ->endGroup();


        $blogListing
            ->addSelect('post_types')
                ->setConfig('multiple', true)
                ->setConfig('allow_null', false)
                ->setDefaultValue('post')
            ->addTextarea('no_results')
                ->setLabel(__("No Results Content", "sage-admin-text"));

        $blogListing
            ->addGroup('post_filters')
                ->setLabel(__("Filter Settings", "sage-admin-text"))
                ->addText('filter_label')
                    ->setAttr('class', 'one-half')
                    ->setDefaultValue(__('Filter By', 'sage'))
                    ->setLabel(__("Filter Label", "sage-admin-text"))
                ->addSelect('filter_type')
                    ->addChoices(
                        [
                            'category' => "Categories",
                            'tags' => "Tags"
                        ]
                    )
                    ->setAttr('class', 'one-half')
                    ->setConfig('allow_null', true)
                ->addText('search_label')
                    ->setAttr('class', 'one-half')
                    ->setDefaultValue(__('Search', 'sage'))
                    ->setLabel(__("Input Label", "sage-admin-text"))
                ->addText('search_placeholder')
                    ->setAttr('class', 'one-half')
                    ->setDefaultValue(__('Enter in a keyword', 'sage'))
                    ->setLabel(__("Placeholder", "sage-admin-text"))
                ->addText('filter_search')
                    ->setAttr('class', 'one-half')
                    ->setDefaultValue(__('Search', 'sage'))
                    ->setLabel(__("Search Button", "sage-admin-text"))
            ->endGroup()
        ;

        return $blogListing->build();
    }

    /**
     * Assets to be enqueued when rendering the block.
     *
     * @param  array  $block
     *
     * @return void
     */
    public function assets(array $block)
    :void
    {
        if (($block['data'] ?? false) && !is_admin()) {
            $data = collect(AcfNestedFields::cleanData($block['data']));
            $post_filters = (object) AcfNestedFields::fixGroupKeys($data->toArray(), 'post_filters');

            bundle('posts')
                ->when(!is_admin())
                ->enqueueJs()
                ->localize(
                    'POSTS',
                    [
                        'api'               => rest_url('sage/v1/blog-posts'),
                        'filterLabel'       => $post_filters->filter_label ?? '',
                        'filterSubmit'      => $post_filters->filter_search ?? '',
                        'labels'            => AcfNestedFields::fixGroupKeys(
                            $data->toArray(),
                            'post_labels'
                        ),
                        'noResults'         => $data->pull('no_results', ''),
                        'searchLabel'       => $post_filters->search_label ?? '',
                        'searchPlaceholder' => $post_filters->search_placeholder ?? '',
                        'taxonomies'        => static::getTaxonomy($post_filters->filter_type ?? ''),
                    ]
                );
        }
    }
}
