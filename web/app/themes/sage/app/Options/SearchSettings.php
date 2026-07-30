<?php

namespace App\Options;

use Log1x\AcfComposer\Builder;
use Log1x\AcfComposer\Options as Field;
use StoutLogic\AcfBuilder\FieldNameCollisionException;
use StoutLogic\AcfBuilder\FieldsBuilder;

class SearchSettings extends Field
{
    /**
     * The option page menu name.
     *
     * @var string
     */
    public $name = 'Search Settings';

    /**
     * The option page menu slug.
     *
     * @var string
     */
    public $slug = 'search-settings';

    /**
     * The option page document title.
     *
     * @var string
     */
    public $title = 'Search Settings | Options';

    /**
     * The option page menu position.
     *
     * @var int
     */
    public $position = PHP_INT_MAX;

    /**
     * The slug of another admin page to be used as a parent.
     *
     * @var string
     */
    public $parent = 'theme-settings';

    /**
     * The option page menu icon.
     *
     * @var null|string
     * @link WordPressIcons https://developer.wordpress.org/resource/dashicons
     */
    public $icon = 'search';

    /**
     * Redirect to the first child page if one exists.
     * Set to 'false' if allowing for children Option pages
     *
     * @var boolean
     */
    public $redirect = true;

    /**
     * The post ID to save and load values from.
     *
     * @var string|int
     */
    public $post = 'sage_search_options';

    /**
     * The option page field group.
     *
     * @return array
     * @throws FieldNameCollisionException
     * @link https://github.com/Log1x/acf-builder-cheatsheet
     */
    public function fields()
    :array
    {
        $fields = Builder::make('search_settings');

        // Start using -> build methods here
        $fields
            ->addText('title')
                ->setAttr('class', 'one-half')
                ->setLabel(__("Page Title", "sage-admin-text"))
            ->addText('results')
                ->setAttr('class', 'one-half')
                ->setLabel(__("Results Text", "sage-admin-text"))
            ->addText('label')
                ->setAttr('class', 'one-half')
            ->addText('placeholder')
                ->setAttr('class', 'one-half')
            ->addText('submit')
                ->setAttr('class', 'one-half')
                ->setDefaultValue("Submit")
            ->addText('reset_search')
                ->setAttr('class', 'one-half')
                ->setDefaultValue("Reset")
            ->addWysiwyg('no_results')
                ->setAttr('class', 'full')
            ->addGroup('post_labels')
                ->addText('read_more')
                    ->setAttr('class', 'one-half')
                    ->setDefaultValue(__('Read More', 'sage'))
            ->endGroup()
        ;

        return $fields->build();
    }
}
