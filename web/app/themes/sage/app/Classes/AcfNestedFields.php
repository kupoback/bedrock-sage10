<?php
/**
 * The main point and purpose of this Class file is to provide a similar
 * ACF Data return to that of Sage 9, in which case a multidimensional
 * array would be returned as an object.
 *
 * This method makes use of Fluent to provide that conversion for the
 * data return
 *
 * This is also flexible to be used outside an ACF Composer Class
 * file, allowing you to instantiate the class, passing through an array
 * of data, and a post ID if necessary. Meaning, you can use it for
 * Option Pages.
 */

namespace App\Classes;

use Illuminate\Support\Collection;
use Illuminate\Support\Fluent;
use Illuminate\Support\Str;

use function collect;

class AcfNestedFields
{

    /**
     * AcfNestedFields __construct
     *
     * @param  array            $data    The field names to grab get_field data for
     * @param  int|null|string  $postId  The int, string, post id for the get_field() method
     */
    public function __construct(
        protected readonly array $data = [],
        public int|null|string   $postId = '',
    ) {
        if (!$this->postId) {
            if (is_home()) {
                $this->postId = get_option('page_for_posts');
            }
            if (is_front_page()) {
                $this->postId = get_option('page_for_front');
            }
        }
    }

    /**
     * Returns an array of all the field data set
     *
     * @return array
     */
    public function getFields()
    :array
    {
        return static::setupFields()
                     ->all();
    }

    /**
     * Returns a collection of all the field data
     *
     * @return Collection
     */
    public function setupFields()
    :Collection
    {
        return collect($this->data)
            ->mapWithKeys(fn ($value) => [$value => static::getField($value)])
            ->mapWithKeys(fn ($value, $key) => static::mapFluent($value, $key));
    }

    /**
     * Takes field data already grabbed, and converts them with Fluent
     *
     * @return Collection
     */
    public function convertGetFields()
    :Collection
    {
        return collect($this->data)
            ->mapWithKeys(fn ($value, $key) => static::mapFluent($value, $key));
    }

    /**
     * Removes the underscores from the array data
     *
     * @param  array  $data  ACF Field key to value data
     *
     * @return array
     */
    public static function cleanData(array $data)
    :array
    {
        return collect($data)
            ->filter(fn ($data, $key) => !Str::startsWith($key, "_"))
            ->toArray();
    }

    /**
     * Takes an array of data and groups them for ACF
     * @param  array   $data        The array of ACF data
     * @param  string  $key_filter  The group key name
     *
     * @return array
     */
    public static function fixGroupKeys(array $data, string $key_filter)
    :array
    {
        return collect($data)
            ->filter(fn ($value, $key) => $key !== $key_filter)
            ->filter(fn ($value, $key) => Str::contains($key, $key_filter))
            ->mapWithKeys(fn ($value, $key) => [Str::replace("{$key_filter}_", '', $key) => $value])
            ->toArray();
    }

    /**
     * Method to get an ACF field with either the post id, or using the global post ID
     *
     * @param  string  $field  The field name
     *
     * @return mixed
     */
    private function getField(string $field)
    :mixed
    {
        if ($this->postId) {
            return get_field(Str::snake($field), $this->postId);
        }

        return get_field(Str::snake($field));
    }

    /**
     * Method to map the array items into their key value association
     *
     * @param  mixed   $value  The value data
     * @param  string  $key    The string key for the field
     *
     * @return array
     */
    private function mapFluent(mixed $value, string $key)
    :array
    {
        $value  = is_array($value)
            ? json_decode((new Fluent($value))->toJson())
            : $value;
        $method = Str::camel($key);

        return [$key => method_exists($this, $method) ? $this->{$method}($value) : $value];
    }
}
