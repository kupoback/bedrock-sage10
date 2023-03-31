<?php

namespace App\Traits;

trait AcfBuilderTrait
{
    /**
     * Quicker method to just return the theme_settings fields
     *
     * @param string $field The settings field name
     *
     * @return mixed
     */
    protected function getThemeSetting(string $field)
    :mixed
    {
        return get_field($field, 'theme_settings');
    }
}
