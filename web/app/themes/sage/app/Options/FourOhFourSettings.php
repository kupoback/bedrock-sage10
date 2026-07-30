<?php

namespace App\Options;

use Log1x\AcfComposer\Builder;
use Log1x\AcfComposer\Options as Field;
use StoutLogic\AcfBuilder\FieldNameCollisionException;

class FourOhFourSettings extends Field
{
    /**
     * The option page menu name.
     *
     * @var string
     */
    public $name = '404 Settings';

    /**
     * The option page menu slug.
     *
     * @var string
     */
    public $slug = 'four-oh-four-options';

    /**
     * The option page document title.
     *
     * @var string
     */
    public $title = 'Four Oh Four Options | Options';

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
    public $icon = null;

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
    public $post = 'sage_404_options';

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
        return __('404 Page Options Updated', 'sage');
    }

    /**
     * The option page field group.
     *
     * @return array
     *
     * @throws FieldNameCollisionException
     * @link https://github.com/Log1x/acf-builder-cheatsheet
     */
    public function fields()
    :array
    {
        $fields = Builder::make('four_oh_four_options');

        // Start using -> build methods here
        $fields
            ->addText('title')
                ->setDefaultValue('Page Not Found')
                ->setLabel(__("404 Page Title", "sage-admin-text"))
            ->addWysiwyg('content')
                ->setLabel(__("404 Page Content", "sage-admin-text"))
            ->addImage('image')
                ->setLabel(__("Error 404 Image", "sage-acf"));;

        return $fields->build();
    }
}
