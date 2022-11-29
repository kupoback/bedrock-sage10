<?php

namespace App\ThemeModule;

use Illuminate\Support\Fluent;
use Illuminate\Support\Str;

use function collect;

class AcfNestedFields
{

    /**
     * @param  array  $data  The field names to grab get_field data for
     */
    public function __construct(protected array $data = [], protected int|null $postId = null)
    {
        if (is_home()) {
            $this->postId = get_option('page_for_posts');
        } elseif (is_front_page()) {
            $this->postId = get_option('page_for_front');
        }
    }

    public function getFields()
    :array
    {
        return collect($this->data)
            ->mapWithKeys(fn($value) => [$value => $this->getField($value)])
            ->mapWithKeys(function ($value, $key) {
                $value = is_array($value)
                    ? json_decode((new Fluent($value))->toJson())
                    : $value;
                $method = Str::camel($key);

                return [$key => method_exists($this, $method) ? $this->{$method}($value) : $value];
            })
            ->all();
    }

    /**
     * Method to get an ACF field with either the post id, or using the global post ID
     *
     * @param string  $field  The field name
     *
     * @return mixed
     */
    protected function getField(string $field)
    :mixed
    {
        if ($this->postId) {
            return get_field($field, $this->postId);
        }

        return get_field($field);
    }

}
