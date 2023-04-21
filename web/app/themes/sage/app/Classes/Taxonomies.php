<?php

namespace App\Classes;

use App\Traits\SageAdminTrait;
use Illuminate\Support\Collection;
use JetBrains\PhpStorm\ArrayShape;
use WP_Error;

class Taxonomies
{

    use SageAdminTrait;

    private Collection $taxonomies;

    /**
     * Registers the post taxonomies
     */
    public function __construct()
    {
        $taxonomies = [
            // Taxonomy Name => Taxonomy Registration Method
            // 'team_type' => $this->teamTypeTaxonomy(),
        ];

        if (!empty($taxonomies)) {
            add_action('init', fn() => collect($taxonomies)
                ->each(function ($tax_arr, $tax_name) {
                    // Drop out if a string or array of post types are not defined
                    if ($tax_arr['post_type'] ?? false) {
                        new WP_Error('no-post-types-defined', "Did not define post types to assign taxonomy to");
                        return false;
                    }
                    return register_taxonomy($tax_name, $tax_arr['post_type'], $tax_arr['tax_args'] ?? []);
                }), 0);
        }
    }

    /**
     * Sets up the Team Type Taxonomy
     *
     * @return array
     */
    #[ArrayShape(['post_type' => "string", 'tax_args' => "array"])]
    public function teamTypeTaxonomy()
    :array
    {
        return [
            'post_type' => 'team', //array or string
            'tax_args'  => self::taxonomyArray(
                'Team Type',
                'team-type',
            ),
        ];
    }
}
