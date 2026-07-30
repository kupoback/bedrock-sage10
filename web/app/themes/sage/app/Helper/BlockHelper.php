<?php

namespace App\Helper;

use Illuminate\Support\Collection;

class BlockHelper
{

    /**
     * Generates to the ::imgSrcSet for the core/image native Gutenberg block
     *
     * @param  int         $image_id    The image ID
     * @param  Collection{align?:String, aspectRatio?:String, caption?:String, sizeSlug?:String}
     *                     $block_attrs  The blocks attribute
     *
     * @return string
     */
    public static function defaultImageBlock(int $image_id, Collection $block_attrs)
    :string
    {
        $image_class = collect();
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

        if ($block_attrs->has('align')) {
            $image_class->push("align" . $block_attrs->get('align'));
        }

        if ($block_attrs->get('aspectRatio')) {
            $image_class->push(" aspect-ratio-{$block_attrs->get('aspectRatio')}");
        }

        if ($image_class->isNotEmpty()) {
            $args->put('image_class', $image_class->filter()->implode(' '));
        }

        return ImageHelper::imgSrcSet(
            $image_id,
            $args->toArray(),
            [],
            [
                'decoding'      => 'async',
                'fetchpriority' => 'high',
            ],
        );

        /**
         * Use the following if you want to have images be links
         * and change the above return to the $image variable
         */
        //preg_match_all('/<a[^>]+href=([\'"])(?<href>.+?)\1[^>]*>/i', $block_html, $link);

        // Wrap the image in a link if set
        // if ($link['href'] ?? false) {
        //     return sprintf(
        //         '%s%s</a>',
        //         $link[0][0] ?? '',
        //         $image,
        //     );
        // }
        // return $image;
    }
}
