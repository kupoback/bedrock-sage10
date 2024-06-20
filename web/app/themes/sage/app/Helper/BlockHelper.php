<?php

namespace App\Helper;

use Illuminate\Support\Collection;

class BlockHelper
{

    /**
     * Generates to the ::imgSrcSet for the core/image native Gutenberg block
     *
     * @param  int         $image_id    The image ID
     * @param  Collection  $block_attrs The blocks attribute
     *
     * @return string
     */
    public static function defaultImageBlock(int $image_id, Collection $block_attrs)
    :string
    {
        preg_match('/<figcaption class="wp-element-caption">(.*?)<\/figcaption>/s', $block_attrs->get('caption', ''), $match);

        $args = collect(
            [
                'size' => $block_attrs->get('sizeSlug', 'large'),
            ]
        );

        if ($match[1] ?? false) {
            $args
                ->put('caption', $match[1])
                ->put('figure_class', 'wp-element-figure figure-image');
        }

        if ($block_attrs->get('aspectRatio')) {
            $args->put('image_class', "aspect-ratio-{$block_attrs->get('aspectRatio')}");
        }

        return ImageHelper::imgSrcSet(
            $image_id,
            $args->toArray(),
            [],
            [
                'decoding' => 'async',
                'fetchpriority' => 'high'
            ]
        );
    }
}
