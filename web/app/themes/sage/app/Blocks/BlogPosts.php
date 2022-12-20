<?php

namespace App\Blocks;

use App\ThemeModule\AcfNestedFields;
use Log1x\AcfComposer\Block;
use StoutLogic\AcfBuilder\FieldNameCollisionException;
use StoutLogic\AcfBuilder\FieldsBuilder;

use function Roots\bundle;

class BlogPosts extends Block
{
    /**
     * The block name.
     *
     * @var string
     */
    public $name = 'Blog Posts';

    /**
     * The block description.
     *
     * @var string
     */
    public $description = 'A block for displaying Blog Posts with a JS Framework';

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
    public $keywords = ['blog', 'post-listing'];

    /**
     * The block post type allow list.
     *
     * @var array
     */
    public $post_types = ['page'];

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
        'multiple' => false,
        'jsx' => true,
    ];

    /**
     * The block styles.
     *
     * @var array
     */
    public $styles = [];

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
        'results',
        'post_labels',
        'no_results',
        'post_filters',
    ];

    /**
     * Data to be passed to the block before rendering.
     *
     * @return array
     */
    public function with()
    :array
    {
        $fields = (new AcfNestedFields($this->fieldNames))
            ->getFields();
        if ($fields['post_filters']->filter_type ?? false) {
            $fields['post_filters']->filter_type = $this->getTaxonomy();
        }
        return $fields;
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
        $blogPosts = new FieldsBuilder('blog_posts');

        $blogPosts
            ->addText('title')
            ->addWysiwyg('content')
            ->addText('results', ['default_value' => __('Results', 'sage')])
            ->addGroup('post_labels')
                ->addText(
                    'category',
                    [
                              'default_value' => __('Category', 'sage'),
                              'wrapper' => ['class' => 'one-half']
                          ]
                )
                ->addText(
                    'view_more',
                    [
                              'default_value' => __('View More', 'sage'),
                              'wrapper' => ['class' => 'one-half']
                          ]
                )
            ->endGroup()
            ->addTextarea('no_results', ['rows' => 4])
            ->addGroup('post_filters')
                ->addText('filter_label', ['default_value' => __('Filter By', 'sage')])
                ->addSelect('filter_type', ['choices' => ['category' => "Categories", 'tags' => "Tags"], 'allow_null' => true])
                ->addText('search_label', ['default_value' => __('Search', 'sage')])
                ->addText('search_placeholder', ['default_value' => __('Enter in a keyword', 'sage')])
                ->addText('filter_search', ['default_value' => __('Search', 'sage')])
            ->endGroup();


        return $blogPosts->build();
    }

    public function getTaxonomy()
    :bool|string
    {
        $taxonomy_type = get_field('post_filters')['filter_type'] ?? false;
        if ($taxonomy_type) {
            return collect(get_terms(['taxonomy' => $taxonomy_type]))
                ->filter()
                ->map(fn ($term) => ['id' => $term->term_id, 'name' => $term->name, 'slug' => $term->slug]);
        }
        return json_encode([]);
    }

    /**
     * Assets to be enqueued when rendering the block.
     *
     * @return void
     */
    public function enqueue()
    :void
    {
    }
}
