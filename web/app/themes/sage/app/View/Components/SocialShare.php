<?php

namespace App\View\Components;

use App\Helper\Helper;
use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Collection;
use Illuminate\View\Component;

class SocialShare extends Component
{

    public Collection $social_media;

    /**
     * Create a new component instance.
     *
     * @param  string  $url           The permalink for the page
     * @param  array   $texts  The text strings for the social media share
     *
     * @return void
     */
    public function __construct(string $url, array $texts = [])
    {
        /**
         * Text Strings can include the keys `twitter`, `email_subject`, `title`, and `email_body`
         */
        $this->social_media = Helper::socialMediaShare($url, $texts);
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return View|Closure|string
     */
    public function render()
    :View|string|Closure
    {
        return view('components.social-share');
    }
}
