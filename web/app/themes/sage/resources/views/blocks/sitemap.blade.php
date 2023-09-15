<div @class([$block->classes ?? '', 'sitemap', 'block']) id="sitemap">
    @if ($title)
        <div class="sitemap__title">
            {!! $title !!}
        </div>
    @endif
    @if (($pages ?? false) && !empty($pages))
        <nav class="sitemap__pages">
            <ul class="sitemap__pages-list">
                @foreach ($pages as $page)
                    <li class="sitemap__pages-list__page">
                        @include('elements.anchor-link', ['link' => ['url' => $page->link, 'title' => $page->title]])
                    </li>
                @endforeach
            </ul>
        </nav>
    @endif
</div>
