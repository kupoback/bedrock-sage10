<?php

declare(strict_types = 1);

namespace App\Helper;

use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class ImageHelper
{

    /**
     * Returns a picture tag serving webp images in a source tag for an image
     *
     * @param  int    $src_id      The Image ID
     * @param  array  $img_attrs   Parameters for overrides, size, property, role, alt, caption override
     * @param  array  $data_attrs  Pass an array of data attributes for use with JS
     * @param  array  $aria_attrs  Any aria attributes needed for the image
     *
     * @return string Returns a formatted picture HTML element with source and img tags
     */
    public static function imgSrcSet(int $src_id, array $img_attrs = [], array $data_attrs = [], array $aria_attrs = [])
    :string
    {
        $get_img_data = collect(self::imgSrcSetArr($src_id, $img_attrs));
        $img_attrs = collect($img_attrs);

        // Empty array for data attributes return
        $da_return = [];
        $aa_return = [];

        $properties  = $get_img_data['prop'] ?? '';
        $image_class = $img_attrs->get('class', false);
        $pic_class   = $img_attrs->get('pic_class', false);
        $image_id    = $img_attrs->get('id', false);

        // Image Information
        $source    = $get_img_data->get('url', false);
        $src_set   = $get_img_data->get('src_set', false);
        $src_sizes = $get_img_data->get('src_set_sizes', false);
        $get_webp  = $get_img_data->get('webp', false);
        $img_alt   = $get_img_data->get('alt', false);

        $role_attributes = $img_attrs->get(
            'role',
            $get_img_data->get('role', 'img')
        );

        if ($data_attrs) {
            $da_return = self::mapDataAttributes($data_attrs);
        }

        if ($aria_attrs) {
            $aa_return = self::mapAriaAttributes($aria_attrs);
        }

        /**
         * The webp output in a source tag
         */
        $webp_source = $get_webp ? sprintf(
            '<source srcset="%s" sizes="%s" type="image/webp">',
            $get_webp,
            $src_sizes,
        ) : '';

        /**
         * The original image output  in a source tag
         */
        $og_source = $src_set ? sprintf(
            '<source srcset="%s" sizes="%s" type="%s">',
            $src_set,
            $src_sizes,
            $get_img_data['img_type'] ?? '',
        ) : '';

        if (isset($get_img_data['img_type']) && strpos($get_img_data['img_type'], 'svg')) {
            return sprintf(
                '<picture %9$s><img src="%1$s" role="%4$s" %2$s property="v:%3$s" %5$s %6$s content="%1$s" %7$s %8$s/></picture>',
                esc_url($source),
                $img_alt ? "alt=\"$img_alt\"" : '',
                $properties,
                $role_attributes,
                $image_class ? "class=\"$image_class\"" : '',
                $image_id ? "id=\"{$image_id}\"" : '',
                implode(' ', $da_return),
                implode(' ', $aa_return),
                $pic_class ? "class=\"$pic_class\"" : '',
            );
        }

        return sprintf(
            '<picture %10$s>%2$s<img src="%1$s" role="%5$s" %3$s property="v:%4$s" %6$s %7$s content="%1$s" %8$s %9$s/></picture>',
            esc_url($source),
            $webp_source . $og_source,
            $img_alt ? "alt=\"$img_alt\"" : '',
            $properties,
            $role_attributes,
            $image_class ? "class=\"$image_class\"" : '',
            $image_id ? "id=\"$image_id\"" : '',
            implode(' ', $da_return),
            implode(' ', $aa_return),
            $pic_class ? "class=\"$pic_class\"" : '',
        );
    }

    /**
     * Function Name: captionImgSrcset
     *
     * @param  int    $src_id      The ID of the image
     * @param  array  $img_attrs   Parameters for overrides, size, property, role, alt, caption override
     * @param  array  $data_attrs  Adds data attributes to the image tag.
     * @param  array  $aria_attrs  Any aria attributes needed for the image
     *
     * @return string
     */
    public static function imgSrcSetCaption(int $src_id, array $img_attrs = [], array $data_attrs = [], array $aria_attrs = [])
    :string
    {
        $get_img_data = collect(self::imgSrcSetArr($src_id, $img_attrs));
        $img_attrs = collect($img_attrs);

        // Empty array for data attributes return
        $da_return    = [];
        $aa_return    = [];
        $caption_text = '';

        // $img_attrs
        $image_class = $img_attrs->get('class', false);
        $pic_class   = $img_attrs->get('pic_class', false);
        $image_id    = $img_attrs->get('id', false);
        $fig_class   = $img_attrs->get('figure_class', false);
        $caption     = $img_attrs->get('caption', false);
        $src_alt     = $img_attrs->get('alt', false);

        // Image Information
        $properties = $get_img_data->get('prop', '');
        $source     = $get_img_data->get('url', false);
        $src_set    = $get_img_data->get('src_set', false);
        $src_sizes  = $get_img_data->get('src_set_sizes', false);
        $get_webp   = $get_img_data->get('webp', false);
        $img_alt    = $get_img_data->get('alt', false);

        // Image Information
        $role_attributes = $img_attrs->get(
            'role',
            $get_img_data->get('role', 'img')
        );

        // Caption
        if ($caption) {
            $caption_text = !is_bool($caption) ? $caption : wp_get_attachment_caption($src_id);

            // The Caption
            $caption = $caption_text ? sprintf(
                '<figcaption class="wp-caption-text %1$s" content="%2$s" property="v:caption"><span>%2$s</span></figcaption>',
                $img_attrs->get('figcaption', ''),
                html_entity_decode($caption)
            ) : '';
        }

        // Check to see if the caption exists.
        if ($caption && !$src_alt) {
            $src_alt = $caption_text;
        }

        if ($data_attrs) {
            $da_return = self::mapDataAttributes($data_attrs);
        }

        if ($aria_attrs) {
            $aa_return = self::mapAriaAttributes($aria_attrs);
        }

        // Final assembly of image attributes
        $src_attributes = "alt=\"$src_alt\"";

        /**
         * The webp output in a source tag
         */
        $webp_source = $get_webp ? sprintf(
            '<source srcset="%s" sizes="%s" type="image/webp">',
            $get_webp,
            $src_sizes,
        ) : '';

        /**
         * The original image output  in a source tag
         */
        $og_source = $src_set ? sprintf(
            '<source srcset="%s" sizes="%s" type="%s">',
            $src_set,
            $src_sizes,
            $get_img_data['img_type'] ?? '',
        ) : '';

        if (isset($get_img_data['img_type']) && strpos($get_img_data['img_type'], 'svg')) {
            return sprintf(
                '<figure %5$s><picture %11$s><img src="%1$s" role="%4$s" %2$s %6$s %7$s property="v:%3$s" content="%1$s" %8$s %9$s /></picture>%10$s</figure>',
                esc_url($source),
                $src_attributes,
                $properties,
                $role_attributes,
                $fig_class ? 'class="wp-caption ' . $fig_class . '"' : '',
                $image_class ? 'class="' . $image_class . '"' : '',
                $image_id ? "id=\"$image_id\"" : '',
                implode(' ', $da_return),
                implode(' ', $aa_return),
                $caption,
                $pic_class ? "class=\"$pic_class\"" : '',
            );
        }
        return sprintf(
            '<figure %6$s><picture %12$s>%2$s<img src="%1$s" role="%5$s" %3$s  %7$s %8$s property="v:%4$s" content="%1$s" %9$s %10$s /></picture>%11$s</figure>',
            esc_url($source),
            $webp_source . $og_source,
            $src_attributes,
            $properties,
            $role_attributes,
            $fig_class ? 'class="wp-caption ' . $fig_class . '"' : '',
            $image_class ? 'class="' . $image_class . '"' : '',
            $image_id ? "id=\"$image_id\"" : '',
            implode(' ', $da_return),
            implode(' ', $aa_return),
            $caption,
            $pic_class ? "class=\"$pic_class\"" : '',
        );
    }

    /**
     * Since this data is used in a few spots, I wanted to be able to just parse and return the data as is
     * as well as have the content all in the same spot
     *
     * @param  int    $src_id
     * @param  array  $img_attrs
     *
     * @return array
     */
    public static function imgSrcSetArr(int $src_id, array $img_attrs = [])
    :array
    {
        // $img_attrs
        $img_size = $img_attrs['size'] ?? 'large';
        $img_prop = $img_attrs['property'] ?? 'image';

        // Image Information
        $img_src       = wp_get_attachment_image_url($src_id, $img_size);
        $src_set       = wp_get_attachment_image_srcset($src_id, $img_size) ?: '';
        $src_set_sizes = wp_get_attachment_image_sizes($src_id, $img_size) ?: '';
        $src_alt       = $img_attrs['alt'] ?? '';

        if (!$src_alt) {
            $src_alt = get_post_meta($src_id, '_wp_attachment_image_alt', true)
                ?: get_the_title($src_id);
        }

        if (is_array($src_alt)) {
            $src_alt = $src_alt[0];
        }

        // Grabs the image extension
        if ($img_src) {
            $image_type = str_replace('.', '', substr($img_src, strrpos($img_src, '.')));

            return [
                'alt'           => html_entity_decode($src_alt),
                'img_type'      => "image/{$image_type}",
                'prop'          => $img_prop,
                'role'          => 'img',
                'src_set'       => $src_set,
                'src_set_sizes' => $src_set_sizes,
                'url'           => $img_src,
                'webp'          => self::getWebp($src_set),
            ];
        }

        return [];
    }

    /**
     * Generates a proper formatted return of post images for Vue
     *
     * @param  int     $post_thumbnail_id  The image ID
     * @param  string  $image_size         The size of the image to return. Defaults to large
     *
     * @return array|string
     */
    public static function generateImgData(int $post_thumbnail_id, string $image_size = 'large')
    :array|string
    {
        if (!$post_thumbnail_id) {
            return '';
        }

        $post_meta_alt = get_post_meta($post_thumbnail_id, '_wp_attachment_image_alt', true);
        $source        = wp_get_attachment_image_url($post_thumbnail_id, $image_size, false);

        $img_data = collect(
            [
                'alt'    => $post_meta_alt ? html_entity_decode($post_meta_alt) : html_entity_decode(get_the_title($post_thumbnail_id)),
                'src'    => $source,
                'srcset' => wp_get_attachment_image_srcset($post_thumbnail_id, $image_size),
                'sizes'  => wp_get_attachment_image_sizes($post_thumbnail_id, $image_size) ?: '',
            ],
        )
            ->filter();

        if ($img_data->isNotEmpty()) {
            $img_data->put('type', 'image/' . str_replace('.', '', substr($source, strrpos($source, '.'))));

            // Handles the webp portion of the image
            $webp_srcset = self::getWebp($img_data->get('srcset'));
            if ($webp_srcset) {
                $img_data->put('webpSrcset', self::getWebp($img_data->get('srcset')));
            }

            return $img_data->toArray();
        }

        return [];
    }

    /**
     * Checks if there are any webp generated images in the uploads directory
     * and returns them as a concatenated string
     *
     * @param  string  $src_set  The srcset that WP generates for the image
     *
     * @return string
     */
    protected static function getWebp(string $src_set)
    :string
    {
        // Creation of webp support
        return collect(explode(', ', $src_set))
            ->map(fn ($srcset) => self::searchWebP(explode(' ', $srcset)))
            ->filter()
            ->implode(', ');
    }

    /**
     * Parse out the location of the webp file
     *
     * @param  array  $img_file
     *
     * @return string
     */
    protected static function searchWebP(array $img_file)
    :string
    {
        $home_url = env('WP_HOME');
        if (!empty($img_file) && $img_file[0]) {
            $item_size = $img_file[1] ?? '';
            $extension = substr($img_file[0], strrpos($img_file[0], '.'));
            $webp_image = match ($extension) {
                '.jpg', '.png', '.jpeg'  => self::matchWebpImage($extension, $img_file[0], $home_url, $item_size),
                default => '',
            };
        }

        return $webp_image ?? '';
    }

    /**
     * Method used for the match case to grab the webp image
     *
     * @param string $extension The file extension
     * @param string $img_file  The image file path
     * @param string $home_url  The Site URL
     * @param string $item_size
     *
     * @return string
     */
    protected static function matchWebpImage(string $extension, string $img_file, string $home_url, string $item_size)
    :string
    {
        $webp_file      = Str::replace($extension, '.webp', $img_file);
        $webp_file_path = parse_url($webp_file)['path'];
        $file_check     = WP_CONTENT_DIR . Str::replace('/app', '', $webp_file_path);
        if (file_exists($file_check)) {
            return "$home_url$webp_file_path $item_size";
        }
        return '';
    }

    /**
     * Maps the data attributes
     *
     * @param  array  $data_attributes
     *
     * @return array
     */
    protected static function mapDataAttributes(array $data_attributes)
    :array
    {
        return collect($data_attributes)
            ->map(fn ($att_val, $att_type) => "data-$att_type=\"$att_val\"")
            ->toArray();
    }

    /**
     * Maps the aria attributes
     *
     * @param  array  $aria_attributes
     *
     * @return array
     */
    protected static function mapAriaAttributes(array $aria_attributes)
    :array
    {
        return collect($aria_attributes)
            ->map(fn ($att_val, $att_type) => "$att_type=\"$att_val\"")
            ->toArray();
    }
}
