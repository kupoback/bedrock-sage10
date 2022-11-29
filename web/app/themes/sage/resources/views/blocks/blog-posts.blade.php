<div @class([$block->classes ?? false, 'container text-white bg-gray-900 mx-auto blog-listing'])>
	<div class="px-4 py-16 sm:px-6 lg:px-8">
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
		<div id="framework-blog"></div>
		<script>var BLOG = {api: {!! json_encode(rest_url('sage/v1/blog-posts/')) !!}, labels: {!! json_encode($post_labels) !!}, noResults: {!! json_encode($no_results) !!}}</script>
		@if (is_admin())
			<div>
				<InnerBlocks></InnerBlocks>
			</div>
		@endif
	</div>
</div>
