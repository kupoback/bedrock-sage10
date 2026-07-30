<?php

namespace App\Traits;

use App\Helper\Helper;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use WP_Post;

trait SageDataFormatTrait
{

    /**
     * Formats the post for the frontend
     *
     * @param  object  $post   An array of posts
     * @param  bool    $image  Whether to include the post-image
     *
     */
    protected function setupPost(object $post, bool $image = false)
    :Collection
    {
        $date_format = 'F j, Y';

        $return = collect(
            [
                'ID'        => $post->ID,
                'category'  => static::getPrimaryTerm(
                    $post->ID,
                    match ($post->post_type) {
                        // Can add more maps here
                        'post'  => 'category',
                        default => '',
                    },
                ),
                'excerpt'   => Helper::generateExcept($post),
                'permalink' => get_the_permalink($post->ID),
                'title'     => $post->post_title,
                'type'      => $post->post_type,
            ],
        );

        if ($image && has_post_thumbnail($post->ID)) {
            $return
                ->put('image', get_post_thumbnail_id($post->ID));
        }

        $date = Carbon::parse($post->post_date, "America/New_York");

        $return
            ->put('date', $date->format('c'))
            ->put('date_string', $date->format($date_format))
        ;

        return $return;
    }
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

    /**
     * Sets up a basic string for returning the date with the proper format for the front end
     *
     * @param  string  $date_from  The starting date
     * @param  string  $date_to    The ending date
     *
     * @return string
     */
    protected function formatEventDate(string $date_from, string $date_to = '')
    :string
    {
        if (!$date_from) {
            return '';
        }

        $date_year_format = "F j, Y";
        $date_format = "F j";
        $time_format = 'g:i A';
        $timezone    = "America/New_York";
        $date_from = Carbon::parse($date_from, $timezone);
        $time_from = $date_from->format($time_format);

        if ($date_to) {
            $date_to = Carbon::parse($date_to, $timezone);

            $same_year  = $date_to->isSameYear($date_from);
            $same_month = $date_to->isSameMonth($date_from);
            $same_day   = $date_to->isSameDay($date_from);

            $time_end  = $date_to->format($time_format);
            $date_from = $date_from->format(($same_year || $same_month) ? $date_year_format : $date_format);
            $date_to   = $date_to->format(($same_year && $same_month) ? 'j, Y' : $date_year_format);

            if ($same_year && $same_month && $same_day) {
                return "$date_from $time_from to $time_end";
            } else {
                return "$date_from - $date_to $time_from to $time_end";
            }
        }

        return "{$date_from->format($date_year_format)} $time_from";
    }

    /**
     * Grabs and returns the primary post taxonomy term
     *
     * @param  WP_Post|int  $post      The WP_Post Object
     * @param  string       $taxonomy  The taxonomy name to grab the primary term from
     *
     * @return string|null
     */
    protected function getPrimaryTerm(WP_Post|int $post, string $taxonomy = 'category')
    :string|null
    {
        $yoast_term = '';
        if (function_exists('yoast_get_primary_term')) {
            $yoast_term =  \yoast_get_primary_term($taxonomy, $post);
        }

        return $yoast_term ?: collect(
            wp_get_post_terms(
                is_int($post) ? $post : $post->ID,
                $taxonomy,
                ['fields' => 'names'],
            )
        )
            ->first();
    }
}
