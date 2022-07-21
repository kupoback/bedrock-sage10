<div class="{{ $block->classes }}">
	@if ($title ?? false)
		<h1>{!! $title !!}</h1>
	@else
		<p>{{ $block->preview ? 'Add text here' : 'No text entered' }}</p>
	@endif
	
	<div class="image-container">
		@if ($image ?? false)
			{!! \App\Helper\ImageHelper::imgSrcSet($image, ['size' => 'medium']) !!}
		@elseif ($block->preview)
			<p>Select an image</p>
		@endif
	</div>
	
	<div>
		<InnerBlocks></InnerBlocks>
	</div>
</div>