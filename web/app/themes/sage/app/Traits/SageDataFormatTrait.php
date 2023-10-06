<?php

namespace App\Traits;

use App\Helper\Helper;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

trait SageDataFormatTrait
{
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
     * Filters the keys to allow them to be back to
     * normal for their variable data on the frontend
     *
     * @param  Collection  $data    The collection of data
     * @param  string      $search  The string to search and replace for
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
}
