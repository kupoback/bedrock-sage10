<?php

namespace App\Classes;

use App\Traits\SageAdminTrait;
use Illuminate\Support\Collection;
use JetBrains\PhpStorm\ArrayShape;
use WP_Error;

class Taxonomies
{

    use SageAdminTrait;

    private array $taxonomies;

    /**
     * Registers the post taxonomies
     */
    public function __construct()
    {
        $this->taxonomies = [
            // Taxonomy Name => Taxonomy Registration Method
            // 'event_type' => $this->eventTypeTaxonomy(),
        ];

        if (!empty($this->taxonomies)) {
            add_action('init', function () {
                collect($this->taxonomies)
                    ->each(function ($tax_arr, $tax_name) {
                        // Drop out if a string or array of post types are not defined
                        if ($tax_arr['post_type'] ?? false) {
                            new WP_Error('no-post-types-defined', "Did not define post types to assign taxonomy to");
                            return false;
                        }
                        return register_taxonomy($tax_name, $tax_arr['post_type'], $tax_arr['tax_args'] ?? []);
                    });
            }, 0);
        }
    }

    /**
     * Sets up the Event Type Taxonomy
     *
     * @return array
     */
    public function eventTypeTaxonomy()
    :array
    {
        return [
            'post_type' => 'events', //array or string
            'tax_args'  => self::taxonomyArray(
                'Event Type',
                'event-type',
            ),
        ];
    }
}
