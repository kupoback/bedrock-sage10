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
     * Set to false if allowing for children Option pages
     *
     * @var boolean
     */
    public $redirect = false;

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
        //region Logos
        $themeSettings
            ->addTab('logos')
                ->addImage('header_logo')
                    ->setLabel(__("Header Logo", "sage-admin-text"))
                ->addImage('footer_logo')
                    ->setLabel(__("Footer Logo", "sage-admin-text"))
                ->addText('gtm_id')
                    ->setAttr('class', 'one-half')
                    ->setLabel(__("GTM Site ID", "sage-admin-text"))
                ->addText('facebook_domain_code')
                    ->setAttr('class', 'one-half')
                    ->setLabel(__("Facebook Domain Code", "sage-admin-text"));
        ;
        //endregion

        //region Header
        $themeSettings
            ->addTab('header')
                ->setLabel(__("Header Setup", "sage-acf"))
                ->addGroup('nav_search')
                    ->addText('nav_search_title')
                        ->setAttr('class', 'one-third')
                        ->setLabel(__("Search Title", "sage-acf"))
                    ->addText('nav_search_placeholder')
                        ->setAttr('class', 'one-third')
                        ->setLabel(__("Search Placeholder", "sage-acf"))
                    ->addText('nav_search_button')
                        ->setAttr('class', 'one-third')
                        ->setLabel(__("Search Button", "sage-acf"))
                ->endGroup();
        //endregion


        //region Header
        $themeSettings
            ->addTab('footer')
                ->setLabel(__("Footer Setup", "sage-acf"))
            ->addText('footer_copyright')
                ->setLabel(__("Copyright Text", "sage-acf"));
        //endregion

        return $themeSettings->build();
    }
}
