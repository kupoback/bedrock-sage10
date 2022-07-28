<?php

namespace App\SageThemeModule;

use Illuminate\Support\Fluent;
use Illuminate\Support\Str;

use function collect;

class AcfNestedFields
{
    /**
     * @param  array  $data  The field names to grab get_field data for
     */
    public function __construct(protected array $data = [])
    {
    }
    
    public function getFields()
    :array
    {
        return collect($this->data)
            ->mapWithKeys(fn($value) => [$value => get_field($value)])
            ->mapWithKeys(function ($value, $key) {
                $value = is_array($value)
                    ? json_decode((new Fluent($value))->toJson())
                    : $value;
                $method = Str::camel($key);
                return [$key => method_exists($this, $method) ? $this->{$method}($value) : $value];
            })
            ->all();
    }
}
