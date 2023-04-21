<section @class([$block->classes ?? false, 'posts-listing'])>
    <div class="">
        <div class="posts-listing__header">
            @if ($title ?? false)
                <h2 class="posts-listing__header-title">{!! $title !!}</h2>
            @endif
            @if ($content ?? false)
                <div class="posts-listing__header-content">
                    {!! $content !!}
                </div>
            @endif
        </div>
    </div>
    <div class="posts-listing__results">
        <h3 class="posts-listing__results-title">
            {!! $results !!}@if (!is_admin())<span id="results-count" class="posts-listing__results-title__count">: 0</span>@endif
        </h3>
    </div>
    <div class="posts-listing__container">
        <section class="posts-listing__container-main">
            <div id="posts-listing"></div>
            <div id="posts-pagination"></div>
        </section>
        <aside class="posts-listing__container-aside">
            <div id="posts-filters"></div>
        </aside>
    </div>
    <script type="application/javascript">
		var POSTS = {
			api: {!! json_encode(rest_url('sage/v1/blog-posts')) !!},
			filterLabel: {!! json_encode($post_filters->filter_label ?? '') !!},
			filterSubmit: {!! json_encode($post_filters->filter_search ?? '') !!},
			labels: {!! json_encode($post_labels) !!},
			noResults: {!! json_encode($no_results) !!},
			searchLabel: {!! json_encode($post_filters->search_label ?? '') !!},
			searchPlaceholder: {!! json_encode($post_filters->search_placeholder ?? '') !!},
			taxonomies: {!! !empty($taxonomy) ? $taxonomy : [] !!}
        };
    </script>
    <div>
        <InnerBlocks />
    </div>
</section>
