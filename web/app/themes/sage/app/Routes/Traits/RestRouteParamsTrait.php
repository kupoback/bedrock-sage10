<?php

declare(strict_types = 1);

namespace App\Routes\Traits;

/**
 * This method allows you to place common methods to reference
 */
trait RestRouteParamsTrait
{

    /**
     * Used as a base for a WP_Query call to have the defaults already defined,
     * and can be combined with wp_parse_args($args, $defaultQueryArgs) to merge
     * them together
     *
     * @return array
     */
    protected function defaultQueryArgs()
    :array
    {
        return [
            'post_type'      => 'post',
            'posts_per_page' => 10,
            'orderby'        => 'date',
            'order'          => 'DESC',
        ];
    }
}
