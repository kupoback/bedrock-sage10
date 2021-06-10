<?php
declare(strict_types = 1);

namespace App\Helper;

class ImageHelper
{
    /**
     * Returns a picture tag serving webp images in a source tag for an image
     *
     * @param int   $src_id    The Image ID
     * @param array $img_attrs
     *                         size      Allows the overriding of the image size, Defaults to large
     *                         property  Allows the overriding of the iamge property type, Defaults to image
     *                         class     Appends a class to the image tag
     *                         alt       Allows for the overriding of the image's alt tag, Defaults to the image alt, then image's title
     *                         role      Allows for the overringing of the image's role, Defaults to img
     * @param array $data_atts Pass an array of data attribuets for use with JS
     *
     * @return string          Returns a formatted picture HTML element with source and img tags
     */
    public static function imgSrcSet($src_id, $img_attrs = [], $data_atts = [], $aria_atts = [])
    {
        $get_img_data = self::imgSrcSetArr($src_id, $img_attrs);

        // Empty array for data attributes return
        $da_return = [];
        $aa_return = [];

        $prop        = $get_img_data['prop'];
        $image_class = $img_attrs['class'] ?? '';
        $image_id    = $img_attrs['id'] ?? '';

        // Image Information
        $src       = $get_img_data['url'] ?: '';
        $src_set   = $get_img_data['src_set'] ?: '';
        $src_sizes = $get_img_data['src_set_sizes'] ?? '';
        $get_webp  = $get_img_data['webp'] ?? '';

        $role = $img_attrs['role'] ?? ($get_img_data['role'] ?? 'img');

        if ($data_atts) {
            $da_return = collect($data_atts)
                ->map(function ($att_val, $att_type) {
                    return "data-{$att_type}=\"{$att_val}\"";
                })
                ->toArray();
        }

        if ($aria_atts) {
            $aa_return = collect($aria_atts)
                ->map(function ($att_val, $att_type) {
                    return "{$att_type}=\"{$att_val}\"";
                })
                ->toArray();
        }

        /**
         * The webp output in a source tag
         */
        $webp_source = !empty($webp_srcset) && $webp_srcset[0] ? sprintf(
            '<source srcset="%s" sizes="%s" type="image/webp">',
            $get_webp,
            $src_sizes
        ) : '';

        /**
         * The original image output  in a source tag
         */
        $og_source = $src_set ? sprintf(
            '<source srcset="%s" sizes="%s" type="%s">',
            $src_set,
            $src_sizes,
            $get_img_data['img_type']
        ) : '';

        return sprintf(
            '<picture>%2$s<img role="%5$s" %3$s property="v:%4$s" %6$s %7$s content="%1$s" %8$s %9$s/></picture>',
            esc_url($src),
            $webp_source . $og_source,
            $get_img_data['alt'] ? "alt=\"{$get_img_data['alt']}\"" : '',
            $prop,
            $role,
            $image_class ? "class=\"{$image_class}\"" : '',
            $image_id ? "id=\"{$image_id}\"" : '',
            implode(' ', $da_return),
            implode(' ', $aa_return),
        );
    }

    /**
     * Function Name: captionImgSrcset
     *
     * @param int   $src_id    The ID of the image
     * @param array $img_attrs Parameters for overrides, size, property, role, alt, caption override
     * @param array $data_atts Add's data attributes to the image tag.
     *
     * @return string
     */
    public static function imgSrcSetCaption($src_id, $img_attrs = [], $data_atts = [], $aria_atts = [])
    {

        $get_img_data = self::imgSrcSetArr($src_id, $img_attrs);

        // Empty array for data attributes return
        $da_return = [];
        $aa_return = [];

        // $img_attrs
        $prop        = $get_img_data['prop'];
        $image_class = $img_attrs['class'] ?? '';
        $image_id    = $img_attrs['id'] ?? '';
        $fig_class   = $img_attrs['figure_class'] ?? '';

        // Image Information
        $src       = $get_img_data['url'] ?: '';
        $src_set   = $get_img_data['src_set'] ?: '';
        $src_sizes = $get_img_data['src_set_sizes'] ?? '';
        $src_alt   = $img_attrs['alt'] ?? '';
        $get_webp  = $get_img_data['webp'] ?? '';
        $role      = $img_attrs['role'] ?? ($get_img_data['role'] ?? 'img');

        $caption = $img_attrs['caption'] ?? false;

        // Caption
        if ($caption) {
            $caption_text = !is_bool($caption) ? $caption : wp_get_attachment_caption($src_id);

            // The Caption
            $caption = $caption_text ? sprintf(
                '<figcaption class="wp-caption-text %1$s" content="%2$s" property="v:caption"><span>%2$s</span></figcaption>',
                $img_attrs['figcaption'] ?? '',
                html_entity_decode($caption)
            ) : '';
        }

        // Check to see if the caption exists.
        if ($caption && !$src_alt) {
            $src_alt = $caption_text;
        }

        if ($data_atts) {
            $da_return = collect($data_atts)
                ->map(function ($att_val, $att_type) {
                    return "data-{$att_type}=\"{$att_val}\"";
                })
                ->toArray();
        }

        if ($aria_atts) {
            $aa_return = collect($aria_atts)
                ->map(function ($att_val, $att_type) {
                    return "{$att_type}=\"{$att_val}\"}";
                })
                ->toArray();
        }

        // Final assembly of image attributes
        $src_attributes = "alt=\"{$src_alt}\"";

        $webp_source = !empty($webp_srcset) && $webp_srcset[0] ? sprintf(
            '<source srcset="%s" sizes="%s" type="image/webp">',
            $get_webp,
            $src_sizes
        ) : '';

        $og_source = $src_set ? sprintf(
            '<source srcset="%s" sizes="%s" type="%s">',
            $src_set,
            $src_sizes,
            str_replace('.', '', substr($src, strrpos($src, '.')))
        ) : '';

        return sprintf(
            '<figure %6$s><picture>%2$s<img role="%5$s" %3$s  %7$s %8$s property="v:%4$s" content="%1$s" %9$s %10$s /></picture>%11$s</figure>',
            esc_url($src),
            $webp_source . $og_source,
            $src_attributes,
            $prop,
            $role,
            $fig_class ? 'class="wp-caption ' . $fig_class . '"' : '',
            $image_class ? 'class="' . $image_class . '"' : '',
            $image_id ? "id=\"{$image_id}\"" : '',
            implode(' ', $da_return),
            implode(' ', $aa_return),
            $caption
        );
    }

    /**
     * Since this data is used in a few spots, I wanted to be able to just parse and return the data as is
     * as well as have the content all in the same spot
     *
     * @param int   $src_id
     * @param array $img_attrs
     *
     * @return array
     */
    public static function imgSrcSetArr($src_id, $img_attrs = [])
    {

        // $img_attrs
        $img_size = isset($img_attrs['size']) ? $img_attrs['size'] : 'large';
        $img_prop = isset($img_attrs['property']) ? $img_attrs['property'] : 'image';

        // Image Information
        $img_src       = wp_get_attachment_image_url($src_id, $img_size);
        $src_set       = wp_get_attachment_image_srcset($src_id, $img_size) ?: '';
        $src_set_sizes = wp_get_attachment_image_sizes($src_id, $img_size) ?: '';
        $src_alt       = isset($img_attrs['alt']) ? $img_attrs['alt'] : '';

        if (!$src_alt) {
            $src_alt = get_post_meta($src_id, '_wp_attachment_image_alt', true) ? get_post_meta($src_id, '_wp_attachment_image_alt', true) : get_the_title($src_id);
        }

        if (is_array($src_alt)) {
            $src_alt = $src_alt[0];
        }

        // Grabs the image extension
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

    /**
     * Generates a proper formatted return of post images for Vue
     *
     * @param int $post_thmb_id The image ID
     *
     * @return array|string
     */
    public static function generateImgData($post_thmb_id)
    {
        if (!$post_thmb_id) {
            return '';
        }

        $img_data['alt']    = get_post_meta($post_thmb_id, '_wp_attachment_image_alt', true) ? html_entity_decode(get_post_meta($post_thmb_id, '_wp_attachment_image_alt', true)) : html_entity_decode(get_the_title($post_thmb_id));
        $img_data['src']    = wp_get_attachment_image_url($post_thmb_id, 'large', false);
        $img_data['srcset'] = wp_get_attachment_image_srcset($post_thmb_id, 'large');
        $img_data['sizes']  = wp_get_attachment_image_sizes($post_thmb_id, 'large') ?: '';

        $source           = wp_get_attachment_image_url($post_thmb_id, 'large', false);
        $img_data['type'] = 'image/' . str_replace('.', '', substr($source, strrpos($source, '.')));

        // Handles the webp portion of the image
        self::getWebp(wp_get_attachment_image_srcset($post_thmb_id, 'large')) ? $img_data['webpSrcset'] = self::getWebp(wp_get_attachment_image_srcset($post_thmb_id, 'large')) : null;

        return $img_data;
    }

    /**
     * Checks if there are any webp generated images in the uploads directory
     * and returns them as a concatenated string
     *
     * @param string $src_set The srcset that WP generates for the image
     *
     * @return string
     */
    protected static function getWebp($src_set)
    {

        // Creation of webp support
        $webp_srcset = [];
        $sset_items  = explode(', ', $src_set);
        foreach ($sset_items as $srcset) {
            $img_file  = explode(' ', $srcset) ? explode(' ', $srcset) : $srcset;
            if (!empty($img_file) && $img_file[0]) {
                $item_size = !empty($img_file) && isset($img_file[1]) ? $img_file[1] : '';
                $extension = substr($img_file[0], strrpos($img_file[0], '.'));
                switch ($extension) {
                    case '.jpg':
                    case '.jpeg':
                    case '.png':
                        $w_item = str_replace($extension, '.webp', $img_file[0]);
                        $w_item = file_exists($_SERVER['DOCUMENT_ROOT'] . parse_url($w_item)['path']) ? $w_item : null;
                        $w_item = !is_null($w_item) ? $w_item . ' ' . $item_size : null;
                        break;
                    default:
                        $w_item = $srcset;
                        break;
                }
                !is_null($w_item) ? array_push($webp_srcset, $w_item) : null;
            }
        }

        return !empty($webp_srcset) ? $webp_srcset = implode(', ', $webp_srcset) : '';
    }
}