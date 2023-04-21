<?php

declare(strict_types=1);

namespace App\Helper;

use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class Helper
{

    /**
     * Returns the excerpt if it exists or creates the excerpt
     * based on the $post_override or $post->post_content
     *
     * @param  mixed  $post_override  Pass a field to override the global $post
     * @param  int    $word_max       Pass an integer to override the word count
     *
     * @return null|string Raw stripped content
     */
    public static function generateExcept(mixed $post_override = null, int $word_max = 25)
    :?string
    {
        if ($post_override) {
            if (is_int($post_override)) {
                $excerpt = get_the_content('', true, $post_override);
            } elseif (is_object($post_override)) {
                $excerpt = $post_override->post_excerpt ?: $post_override->post_content ?: '';
            } elseif (is_string($post_override)) {
                $excerpt = $post_override;
            } else {
                $excerpt = '';
            }
        } else {
            $post = get_post();

            if ($post && Str::length($post->post_excerpt)) {
                $excerpt = $post->post_excerpt;
            } elseif ($post && Str::length($post->post_content)) {
                $excerpt = $post->post_content;
            } else {
                $excerpt = '';
            }
        }

        if ($excerpt) {
            $excerpt = strip_shortcodes($excerpt);
            $excerpt = strip_tags($excerpt);
            $excerpt = wp_trim_words($excerpt, $word_max, '');
            return html_entity_decode($excerpt);
        }

        return null;
    }

    /**
     * Generates share URLs with encoded title and url params for Facebook, Twitter, Instagram, and e-mail
     *
     * @param  string                                                                            $url           The url of the page
     * @param  array{email_body: string, email_subject: string, title: string, twitter: string}  $text_strings  Text strings to pass into the URL generations
     *
     * @return Collection
     */
    public static function socialMediaShare(string $url, array $text_strings = [])
    :Collection
    {
        $share_url     = urlencode($url);
        $twitter_title = $text_strings['twitter'] ?? get_bloginfo('name');
        $email_subject = $text_strings['email_subject'] ?? ($text_strings['title'] ?? '');
        $email_body    = self::filterEmailBody($text_strings['email_body'] ?? '');

        return collect(
            [
                'facebook' => "https://facebook.com/sharer/sharer.php?u=$share_url",
                'twitter'  => "https://twitter.com/intent/tweet?text=$twitter_title&url=$share_url",
                'linkedin' => "https://www.linkedin.com/sharing/share-offsite/?url=$share_url",
                'email'    => "mailto:?subject=$email_subject&body=$email_body",
            ],
        );
    }

    /**
     * Replaces all break tags with new line breaks
     *
     * @param  string  $email_body
     *
     * @return string
     */
    protected static function filterEmailBody(string $email_body = ''):string
    {
        return str_replace('<br />', '%0D%0A ', $email_body);
    }
}
