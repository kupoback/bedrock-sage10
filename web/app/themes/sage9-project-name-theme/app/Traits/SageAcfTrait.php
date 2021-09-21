<?php

declare(strict_types = 1);

namespace App\Traits;

trait SageAcfTrait
{
    /**
     * Quicker method to just return the theme_settings fields
     *
     * @param string $field The settings field name
     *
     * @return mixed
     */
    protected function getThemeSetting($field)
    {
        return get_field($field, 'theme_settings');
    }
}
