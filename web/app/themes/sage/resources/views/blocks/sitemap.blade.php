<div @class([$block->classes ?? '', 'sitemap-container']) id="sitemap">
    @if ($title)
        <div class="sitemap-container__title">
            {!! $title !!}
        </div>
    @endif
    @if (($pages ?? false) && !empty($pages))
        <nav class="sitemap-container__pages">
            <ul class="sitemap-container__pages-list">
                @foreach ($pages as $page)
                    <li class="sitemap-container__pages-list__page">
                        <a href="{!! $page->link !!}">{!! $page->title !!}</a>
                    </li>
                @endforeach
            </ul>
        </nav>
    @endif
</div>
