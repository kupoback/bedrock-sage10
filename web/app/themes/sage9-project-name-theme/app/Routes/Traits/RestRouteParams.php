<?php

declare(strict_types = 1);

namespace App\Routes\Traits;

trait RestRouteParams
{
    /**
     * Used as a base for a WP_Query call to have the defaults already defined,
     * and can be combined with wp_parse_args($args, $defaultQueryArgs) to merge
     * them together
     *
     * @return array
     */
    protected function defaultQueryArgs()
    {
        return [
            'post_type' => 'post',
            'posts_per_page' => 10,
            'orderby' => 'date',
            'order' => 'DESC'
        ];
    }
}
