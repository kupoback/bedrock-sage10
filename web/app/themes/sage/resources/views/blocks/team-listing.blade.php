<div @class([$block->classes ?? false,'text-white bg-gray-500',])>
	<div class="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mx-auto">
		@if ($title)
			<h2>{!! $title !!}</h2>
		@else
			<p>{{ $block->preview ? 'Add an item...' : 'No items found!' }}</p>
		@endif
		@if (!empty($team))
			<div class="grid grid-cols-1 gap-8 mt-8 md:gap-12 md:mt-16 md:grid-cols-4 lg:grid-cols-4">
{{--				@for($i = 0; $i < count($team); $i++)--}}
{{--					Hello--}}
{{--				@endfor--}}
				@foreach ($team as $key => $individual)
					<div class="team">
						@if (has_post_thumbnail($individual))
							{!! \App\Helper\ImageHelper::imgSrcSet(get_post_thumbnail_id($individual->ID), ['size' => 'medium']) !!}
						@endif
						<h3 class="text-lg font-bold">{!! $individual->post_title !!}</h3>
					</div>
				@endforeach
			</div>
		@endif
		
		<div>
			<InnerBlocks></InnerBlocks>
		</div>
	</div>
</div>
