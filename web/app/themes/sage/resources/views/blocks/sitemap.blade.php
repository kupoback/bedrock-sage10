<div id="sitemap" @class([$block->classes ?? '', 'sitemap', 'block'])>
    @if ($title)
        <div class="sitemap__title">
            <h2>{!! $title !!}</h2>
        </div>
    @endif
    @if (($pages ?? false) && !empty($pages))
        <nav class="sitemap__pages">
            <ul class="sitemap__pages-list">
                @foreach ($pages as $page)
                    @isset ($page->link)
                        <li class="sitemap__pages-list__page">
                            @include('elements.anchor-link', ['link' => ['url' => $page->link, 'title' => $page->title]])
                        </li>
                    @endisset
                @endforeach
            </ul>
        </nav>
    @endif
</div>
