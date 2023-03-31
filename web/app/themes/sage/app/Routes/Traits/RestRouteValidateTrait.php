<?php

namespace App\Routes\Traits;

use Illuminate\Support\Collection;
use WP_Error;

use function filter_var;
use function is_string;

use const FILTER_SANITIZE_FULL_SPECIAL_CHARS;

/**
 * A trait in which sanitization or validation methods
 * can exist when dealing with Rest API values
 */
trait RestRouteValidateTrait
{
    /**
     * A function to sanitize the categories passed via array
     *
     * @param $value
     * @param $request
     * @param $param
     *
     * @return Collection|WP_Error
     */
    public function sanitizeCats($value, $request, $param)
    :WP_Error|Collection
    {
        if (!is_array($value)) {
            return new WP_Error(
                'rest_invalid_param',
                esc_html__('Value must be an array.', 'sage'),
                ['status' => 400]
            );
        }

        return collect($value)
            ->map(fn ($cat) => !empty($cat) ? sanitize_title($cat) : false)
            ->filter()
            ->values();
    }

    /**
     * A function to validate and return the int value of a string
     *
     * @param $value
     * @param $request
     * @param $param
     *
     * @return int|WP_Error
     */
    public function validateIntStr($value, $request, $param)
    :WP_Error|int
    {
        if (!isset($value) && empty(intval($value))) {
            return new WP_Error(
                'rest_invalid_param',
                esc_html__('Value must be an integer.', 'sage'),
                ['status' => 400]
            );
        }

        return intval($value);
    }

    /**
     * A function to sanitize the string text to ensure that
     * it's safe to work with
     *
     * @param $value
     * @param $request
     * @param $param
     *
     * @return mixed|WP_Error
     */
    public function sanitizeText($value, $request, $param)
    :mixed
    {
        if (!is_string($value)) {
            return new WP_Error(
                'rest_invalid_param',
                esc_html__('Value must be a string.', 'sage'),
                ['status' => 400]
            );
        }

        return filter_var($value, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    }
}
