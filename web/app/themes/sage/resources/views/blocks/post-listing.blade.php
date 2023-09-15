<div @class([$block->classes ?? false, 'posts-listing', 'block'])>
    <section class="posts-listing__header">
        @if ($title ?? false)
            <h2 class="posts-listing__header-title">{!! $title !!}</h2>
        @endif
        @if ($content ?? false)
            <div class="posts-listing__header-content">
                {!! $content !!}
            </div>
        @endif
    </section>

    <section class="posts-listing__container">
        <div class="posts-listing__container-count">
            <h3>
                {!! $results !!}@if (!is_admin()): <span id="results-count" class="posts-listing__container-count__results">0</span>@endif
            </h3>
        </div>

        <div class="posts-listing__container-main">
            <div id="posts-listing"></div>
            <div id="posts-pagination"></div>
        </div>
        <aside class="posts-listing__container-aside">
            <div id="posts-filters"></div>
        </aside>
    </section>
</div>

<script type="application/javascript">var POSTS = { {!! $json_data !!} }</script>
