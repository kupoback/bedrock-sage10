<?php
namespace App\Routes\Traits;

use Illuminate\Support\Collection;
use WP_Error;

trait RestRouteValidate
{
    /**
     * @param $value
     * @param $request
     * @param $param
     *
     * @return Collection|WP_Error
     */
    public function sanitizeCats($value, $request, $param)
    {
        if (!is_array($value)) {
            return new WP_Error('rest_invalid_param', esc_html__('Must be an array.', 'focus-project-theme'), array('status' => 400));
        }

        return collect($value)
            ->map(function ($cat) {
                if (!empty($cat)) {
                    return sanitize_title($cat);
                }
                return false;
            })
            ->filter()
            ->values();
    }

    /**
     * @param $value
     * @param $request
     * @param $param
     *
     * @return int|WP_Error
     */
    public function validatePPPage($value, $request, $param)
    {
        if (!isset($value) && empty(intval($value))) {
            return new WP_Error('rest_invalid_param', esc_html__('Must be an integer.', 'focus-project-theme'), array('status' => 400));
        }

        return intval($value);
    }

    /**
     * @param $value
     * @param $request
     * @param $param
     *
     * @return mixed|WP_Error
     */
    public function sanitizeText($value, $request, $param)
    {
        if (!\is_string($value)) {
            return new WP_Error('rest_invalid_param', esc_html__('Must be a string.', 'focus-project-theme'), array('status' => 400));
        }

        return \filter_var($value, \FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    }
}
