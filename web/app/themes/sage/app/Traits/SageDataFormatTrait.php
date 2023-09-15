<?php

namespace App\Traits;

use App\Helper\Helper;
use Illuminate\Support\Collection;

trait SageDataFormatTrait
{
    /**
     * Calls to a Helper method that filters internal array items
     * that would be multidimensional
     *
     * @param  mixed  $data  The data that needs to be parsed
     *
     * @return Collection|mixed
     */
    protected function filterArrayItems(mixed $data)
    :mixed
    {
        return Helper::filterArray($data);
    }
}
