<?php

namespace App\Options;

use Log1x\AcfComposer\Options as Field;
use StoutLogic\AcfBuilder\FieldNameCollisionException;
use StoutLogic\AcfBuilder\FieldsBuilder;

class ThemeSettings extends Field
{
    /**
     * The option page menu name.
     *
     * @var string
     */
    public $name = 'Theme Settings';

    /**
     * The option page menu slug.
     *
     * @var string
     */
    public $slug = 'theme-settings';

    /**
     * The option page document title.
     *
     * @var string
     */
    public $title = 'Theme Settings | Options';

    /**
     * The option page permission capability.
     *
     * @var string
     */
    public $capability = 'edit_theme_options';

    /**
     * The option page menu position.
     *
     * @var int
     */
    public $position = 95;

    /**
     * The slug of another admin page to be used as a parent.
     *
     * @var string
     */
    public $parent = null;

    /**
     * The option page menu icon.
     *
     * @var string
     * @link WordPressIcons https://developer.wordpress.org/resource/dashicons
     */
    public $icon = 'dashicons-admin-tools';

    /**
     * Redirect to the first child page if one exists.
     *
     * @var boolean
     */
    public $redirect = true;

    /**
     * The post ID to save and load values from.
     *
     * @var string|int
     */
    public $post = 'sage_theme';

    /**
     * The option page autoload setting.
     *
     * @var bool
     */
    public $autoload = true;

    /**
     * Localized text displayed on the submit button.
     *
     * @return string
     */
    public function updateButton()
    :string
    {
        return __('Update', 'sage');
    }

    /**
     * Localized text displayed after form submission.
     *
     * @return string
     */
    public function updatedMessage()
    :string
    {
        return __('Theme Settings Updated', 'sage');
    }

    /**
     * The option page field group.
     *
     * @return array
     * @throws FieldNameCollisionException
     *
     * @link https://github.com/Log1x/acf-builder-cheatsheet
     */
    public function fields()
    :array
    {
        $themeSettings = new FieldsBuilder('theme_settings');

        // Start using -> build methods here
        $themeSettings
            ->addTab('logos')
                ->addImage('header_logo')
                ->addImage('footer_logo')
            ->addTab('search')
                ->addText('search_title')
                    ->setAttr('class', 'one-half')
                ->addText('search_results')
                    ->setAttr('class', 'one-half')
                ->addText('search_label')
                    ->setAttr('class', 'one-half')
                ->addText('search_placeholder')
                    ->setAttr('class', 'one-half')
                ->addText('search_submit')
                    ->setAttr('class', 'one-half')
                    ->setDefaultValue("Submit")
                ->addText('reset_search')
                    ->setAttr('class', 'one-half')
                    ->setDefaultValue("Reset")
                ->addWysiwyg('search_no_results')
                    ->setAttr('class', 'full')
                ->addGroup('search_post_labels')
                    ->addText('read_more')
                        ->setAttr('class', 'one-half')
                        ->setDefaultValue(__('Read More', 'sage'))
                ->endGroup()
        ;

        return $themeSettings->build();
    }
}
