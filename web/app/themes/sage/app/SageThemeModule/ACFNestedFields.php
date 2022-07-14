<?php

namespace App\SageThemeModule;

use Illuminate\Support\Str;

class ACFNestedFields
{

    protected array $data = [];

    private bool $returnArrayFormat = false;

    public function __construct($data = [])
    {
        $this->setReturnFilter();
        $this->data = $data;
        $this->setData($this->data);
    }

    /**
     * Set Return Filter
     *
     * Return filter sober/controller/acf-array
     */
    private function setReturnFilter()
    :void
    {
        $this->returnArrayFormat =
            (has_filter('sage/classes/acf/array')
                ? apply_filters('sage/classes/acf/array', $this->returnArrayFormat)
                : false);
    }

    /**
     * Iterates over array and adds a new snake cased key, with orignial value, for each kebab cased key
     *
     * Return void
     */
    private function recursiveSnakeCase(&$data)
    :void
    {
        if (!is_array($data)) {
            return;
        }

        collect($data)
            ->each(fn($val, $key) => is_array($val)
                ? $this->recursiveSnakeCase($val)
                : $data[Str::kebab($key)] = $val);
    }

    /**
     * Convert the data for the fields to an object if returnArrayFormat is false
     *
     * @return void
     */
    public function setDataReturnFormat()
    :void
    {
        if ($this->returnArrayFormat) {
            return;
        }

        if ($this->data) {
            collect($this->data)
                ->each(fn($item, $key) => $this->data[$key] = json_decode(json_encode($item)));
        }
    }

    /**
     * Set Data
     *
     * Set data from passed in field keys
     */
    public function setData($acf)
    :void
    {
        if (is_string($acf)) {
            $this->data = [$acf => get_field($acf)];
        }

        if (is_array($acf)) {
            collect($acf)
                ->each(fn($item) => $this->data[$item] = get_field($item));
        }

        $this->recursiveSnakeCase($this->data);

        // Convert the data to an object
        $this->setDataReturnFormat();
    }

    /**
     * Get Data
     *
     * Return the data
     *
     * @return array
     */
    public function getData()
    :array
    {
        return $this->data;
    }
}
