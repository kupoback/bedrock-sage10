<?php

namespace App\Traits;

use Illuminate\Support\Collection;
use Illuminate\Support\Str;

trait SageTrait
{
    /**
     * Filters the keys to allow them to be back to
     * normal for their variable data on the frontend
     *
     * @param  Collection  $data    The collection of data
     * @param  string      $search  The acf field string to search and replace for
     *
     * @return Collection
     */
    protected function fixKeyNames(Collection $data, string $search)
    :Collection
    {
        return $data
            ->filter()
            ->mapWithKeys(fn ($value, $key) => [Str::replace("{$search}_", '', $key) => $value]);
    }

    /**
     * Fetches the terms based on the taxonomy passed
     *
     * @param  string  $taxonomy_name The taxonomy name to pull terms from
     *
     * @return Collection ['id', 'name', 'slug']
     */
    protected function getTaxonomy(string $taxonomy_name = 'categories')
    :Collection
    {
        $taxonomy_type = $taxonomy_name;
        if ($taxonomy_type) {
            return collect(get_terms(['taxonomy' => $taxonomy_type]))
                ->filter()
                ->map(fn ($term) => ['id' => $term->term_id, 'name' => $term->name, 'slug' => $term->slug]);
        }
        return collect();
    }
}
