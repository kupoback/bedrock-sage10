<section @class([$block->classes ?? false, 'container text-white bg-gray-900 mx-auto py-6 blog-listing'])>
    <div class="px-4 pb-6 sm:px-6 lg:px-8">
        <div class="blog-listing__header">
            @if ($title ?? false)
                <h2 class="text-white text-3xl font-bold sm:text-4xl blog-listing__header-title">{!! $title !!}</h2>
            @endif
            @if ($content ?? false)
                <div class="mt-4 text-gray-300 blog-listing__header-content">
                    {!! $content !!}
                </div>
            @endif
        </div>
    </div>
    @if ($results && !is_admin())
        <div class="px-4 pb-6 sm:px-6 lg:px-8">
            <h3 class="text-lg font-bold">{!! $results !!}@if (!is_admin())<span id="results-count">: 0</span>@endif
            </h3>
        </div>
        <div class="flex px-4 sm:px-6 lg:px-8 ">
            <div class="flex-1 w-9/12">
                <div id="framework-blog"></div>
                <div id="framework-pagination"></div>
            </div>
            <aside class="pl-8 flex-initial w-3/12">
                <div id="framework-filters"></div>
            </aside>
        </div>
    @else
        <div class="px-4 sm:px-6 lg:px-8">
            The Results title, and listing will appear on the frontend, not in this preview
        </div>
    @endif
    <script>
        var RBLOG = {
            api: {!! json_encode(rest_url('sage/v1/blog-posts/')) !!},
            filterLabel: {!! json_encode($post_filters->filter_label ?? '') !!},
            filterSubmit: {!! json_encode($post_filters->filter_search ?? '') !!},
            labels: {!! json_encode($post_labels) !!},
            noResults: {!! json_encode($no_results) !!},
            searchLabel: {!! json_encode($post_filters->search_label) !!},
            searchPlaceholder: {!! json_encode($post_filters->search_placeholder) !!},
            taxonomies: {!! $post_filters->filter_type ?? [] !!}
        };
    </script>
    @if (is_admin())
        <div>
            <InnerBlocks></InnerBlocks>
        </div>
    @endif
</section>
