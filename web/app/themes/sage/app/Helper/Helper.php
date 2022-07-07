<?php
declare(strict_types = 1);

namespace App\Helper;

use Illuminate\Support\Collection;

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
     * Generates share URLs with encoded title and url params for Facebook, Twitter, Instagram, and e-mail
     *
     * @param string $url           The url of the page
     * @param string $email_subject The subject line for the email
     * @param string $email_body    The email body copy
     * @param string $twitter_text  Twitter share text
     *
     * @return Collection
     */
    public static function socialMediaShare(string $url, string $email_subject = '', string $email_body = '', string $twitter_text = '')
    :Collection
    {
        $share_url   = urlencode($url);
        $twitter_title = $twitter_text ?: get_bloginfo('name');
        // $email_subject = $email_subject ?: get_bloginfo('name');
        // $email_body    = self::filterEmailBody($email_body) . " $url";

        return collect(
            [
                'facebook'  => "https://facebook.com/sharer/sharer.php?u=$share_url",
                'twitter'   => "https://twitter.com/intent/tweet?text=$twitter_title&url=$share_url",
                'linkedin'  => "https://www.linkedin.com/sharing/share-offsite/?url=$share_url",
                'email'     => "mailto:?subject=$email_subject&body=$email_body",
            ]
        );
    }

    /**
     * Replaces all break tags with new line breaks
     *
     * @param string $email_body
     *
     * @return array|string|string[]
     */
    protected static function filterEmailBody(string $email_body = '')
    :array|string
    {
        return str_replace('<br />', '%0D%0A ', $email_body);
    }

    /**
     * Maps through all the flex sidebar items and
     * matches the block with the correct classes
     *
     * @param Collection $block
     *
     * @return Collection
     */
    public static function flexRowClasses(Collection $block)
    :Collection
    {
        $row_background = $block->get('row_background_color', 'none');
        $row_bottom_bleed = $block->get('row_bottom_bleed_color', 'none');
        $row_width = $block->get('row_size', 'contained');
        $content = collect($block->get('content'));
        $block_content = $content;

        if ($block_content->isNotEmpty()) {
            return collect()
                ->put(
                    'row_class',
                    $block_content
                        ->map(fn ($value) => collect($value)
                            ->filter(fn ($val, $key) => $key === 'acf_fc_layout')
                            ->first())
                        ->map(function ($value) {
                            return match ($value) {
                                'card_content_module' => 'cards-offset-section',
                                'cards_module', 'contact_module' => 'cards-section',
                                'communities_first_module' => 'first-mask-section',
                                'headshot_module' => 'team-section',
                                'help_support_module' => 'support-section',
                                'photo_album_module' => 'section-para-logos',
                                'text_image_module' => 'content-photo-section',
                                'testimonials_module' => 'stories-carousel-section',
                                'video_module' => 'featured-video',
                                default => '',
                            };
                        })
                        ->push(
                            $row_background !== 'none' ? "{$row_background}__bg" : '',
                            $row_bottom_bleed !== 'none' ? "section-bg-bottom-$row_bottom_bleed": '',
                            $row_bottom_bleed === 'none' && $content
                                ->filter(fn ($val) => $val === 'cards_module' && !empty($val))
                                ->isNotEmpty() ? "section-bg-bottom-{$row_bottom_bleed}__cards-offset" : '',
                        )
                        ->filter()
                        ->implode(' ')
                )
                ->put(
                    'btn_color',
                    match ($row_background) {
                        'orange' => 'blue__bg blue__bg__reverse white__text',
                        'blue' => 'btn__pill orange__bg orange__bg__reverse',
                        default => 'orange__bg'
                    }
                )
                ->put(
                    'width_size',
                    match ($row_width) {
                        'full-width' => 'full',
                        default => 'contained',
                    }
                );
        }
        return collect();
    }

    public static function singleFlexRowClasses(Collection $block)
    :Collection
    {
        if ($block->isNotEmpty()) {
            return collect()
                ->put(
                    'row_class',
                    $block
                        ->filter(fn ($value, $key) => $key === 'acf_fc_layout')
                        ->map(function ($value) {
                            return match ($value) {
                                'accordion_module' => 'single-accordion',
                                'cards_module' => 'single-cards',
                                'communities_first_module' => 'single-mask',
                                'contact_module' => 'single-form',
                                'content_module' => 'wysiwyg',
                                'download_module' => 'card card__download',
                                'headshot_module' => 'single-team',
                                'testimonial_slider_module' => 'single-testimonials',
                                'text_image_module' => 'single-content-photo',
                                'video_module' => 'single-video',
                                default => '',
                            };
                        })
                        ->filter()
                        ->implode(' ')
                );
        }
        return collect();
    }

    /**
     * Runs through the sidebar items, and adds the appropriate
     * classes based on the block type, and if there is a row color
     *
     * @param Collection $sidebar
     *
     * @return Collection
     */
    public static function flexSideClasses(Collection $sidebar)
    :Collection
    {
        $block_color = $sidebar->get('block_color', 'default');

        if ($sidebar->filter()->isNotEmpty()) {
            return collect()
                ->put(
                    'row_class',
                    $sidebar
                        ->filter(fn ($value, $key) => $key === 'acf_fc_layout')
                        ->map(fn($value) => match ($value) {
                            'sidebar_author' => 'card-row',
                            default => '',
                        })
                        ->implode(' ')
                )
                ->put('background_color', $block_color !== 'default' ? $block_color : '')
                ->put('white_text', $block_color !== 'default');
        }
        return collect();
    }
}
