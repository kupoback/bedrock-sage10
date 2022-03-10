<?php
declare(strict_types = 1);

namespace App\Helper;

class Helper
{

    /**
     * Returns the excerpt if it exists or creates the excerpt
     * based on the $post_override or $post->post_content
     *
     * @param null|string $post_override Pass a field to override the global $post
     * @param int         $word_max      Pass an integer to override the word count
     *
     * @return null|string Raw stripped content
     */
    public static function generateExcept(string $post_override = null, int $word_max = 25)
    :?string
    {
        if (!$post_override) {
            $excerpt = !is_int($post_override) ? $post_override : get_the_content('', true, $post_override);
            if (is_object($excerpt) && $excerpt->post_content ?? false) {
                $excerpt = $excerpt->post_content;
            } else {
                return '';
            }
        } else {
            /** @noinspection PhpVariableNamingConventionInspection */
            global $post;
            $excerpt = strlen($post->post_excerpt) !== 0 ? $post->post_excerpt : $post->post_content;
        }

        if ($excerpt) {
            $excerpt = strip_shortcodes($excerpt);
            $excerpt = strip_tags($excerpt);
            $excerpt = wp_trim_words($excerpt, $word_max, '');
        }

        return html_entity_decode($excerpt);
    }

    /**
     * Generates share URL's with encoded title and url params for Facebook, Twitter, Instagram, and e-mail
     *
     * @param string $title
     * @param string $url
     *
     * @return object
     */
    public static function socialMediaShare(string $title, string $url)
    :object
    {
        $share_title = urlencode($title);
        $share_url   = urlencode($url);

        return (object) [
            'facebook'  => "https://facebook.com/sharer/sharer.php?u=$share_url",
            'twitter'   => "https://twitter.com/intent/tweet?text=$share_title&url=$share_url",
            'email'     => "mailto:?subject=$share_title&body=$share_url",
        ];
    }
}
