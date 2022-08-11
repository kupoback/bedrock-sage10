<div class="container mx-auto bg-blue-200 p-10 page__header">
	<div class="flex flex-nowrap flex-row">
		<div class="flex justify-center items-center w-1/3 page__header-title">
			<h1>{!! $title !!}</h1>
		</div>
		{{--
		@if (has_post_thumbnail())
			<div class="flex page__header-image">
				{!! \App\Helper\ImageHelper::imgSrcSet(get_post_thumbnail_id(), ['size' => 'large']) !!}
			</div>
		@endif
		--}}
	</div>
</div>
