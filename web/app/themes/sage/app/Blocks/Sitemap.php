<?php

namespace App\Blocks;

use App\Classes\AcfNestedFields;
use Illuminate\Support\Collection;
use Log1x\AcfComposer\Block;
use StoutLogic\AcfBuilder\FieldNameCollisionException;
use StoutLogic\AcfBuilder\FieldsBuilder;

class Sitemap extends Block
{
    /**
     * The block name.
     *
     * @var string
     */
    public $name = 'Sitemap';

    /**
     * The block description.
     *
     * @var string
     */
    public $description = 'A block that generates a sitemap list similar to the shortcode version.';

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
    public $icon = 'text-page';

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
        'post_types',
        'orderby',
        'order',
        'omit_current',
        'exclude_pages',
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
        return self::buildSitemap(
            (new AcfNestedFields($this->fieldNames))
                ->setupFields()
        );
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
        $sitemap = new FieldsBuilder('sitemap');

        // Start using -> build methods here
        $sitemap
            ->addText('title')
                ->setAttr('class', 'one-half')

            ->addSelect('post_types')
                ->setConfig('multiple', true)
                ->setConfig('allow_null', false)
                ->setAttr('class', 'one-half')
                ->setLabel(__('Post Type', 'sage'))
                ->setDefaultValue(['page'])

            ->addSelect('orderby')
                ->addChoices(
                    [
                        'title' => __('Title', 'sage'),
                        'parent' => __('Parent Page', 'sage'),
                    ]
                )
                ->setAttr('class', 'one-third')
                ->setDefaultValue("title")
                ->setLabel(__('Order by', 'sage'))

            ->addSelect('order')
                ->addChoices(
                    [
                        'asc' => __('Ascending', 'sage'),
                        'desc' => __('Descending', 'sage')
                    ]
                )
                ->setAttr('class', 'one-third')
                ->setDefaultValue("asc")
                ->setLabel(__("Order", 'sage'))

            ->addTrueFalse('omit_current')
                ->setAttr('class', 'one-third')
                ->setLabel(__("Omit the current page?", "sage"))

            ->addText("exclude_pages")
                ->setLabel(__("Exclude the following pages", "sage"))
                ->setInstructions(__("Use this field with a list of comma separated Post ID's to omit from the listing", 'sage'));

        return $sitemap->build();
    }

    /**
     * Builds out the return for the frontend of the Sitemap listing
     *
     * @param Collection  $acf_values  The ACF values collected from the form
     *
     * @return array
     */
    protected function buildSitemap(Collection $acf_values)
    :array
    {
        /**
         * Deal with the pages we're to omit
         */
        $omit_ids = $acf_values->get('exclude_pages', '');
        $exclude = collect()
            ->merge(
                $omit_ids
                    ? explode(',', preg_replace('/[^\d,]/', '', $omit_ids))
                    : []
            );

        if ($acf_values->get('omit_current')) {
            $exclude->push($this->post_id);
        }

        /**
         * Fetch the posts based on the query array passed
         */
        $pages = collect(
            get_posts(
                [
                    'post_type' => $acf_values->get('post_types', []),
                    'orderby' => $acf_values->get('orderby', 'title'),
                    'order' => $acf_values->get('order', 'asc'),
                    'exclude' => $exclude
                        ->filter()
                        ->isNotEmpty()
                        ? apply_filters('wp_list_pages_excludes', $exclude->toArray())
                        : []
                ]
            )
        );

        if ($pages->isNotEmpty()) {
            return [
                'title' => $acf_values->get('title', ''),
                'pages' => $pages
                    ->filter()
                    ->map(fn ($page) => (object) [
                        'link' => get_the_permalink($page),
                        'title' => $page->post_title,
                    ])
                    ->toArray()
            ];
        }

        return ['title' => $acf_values->get('title', ''),];
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
