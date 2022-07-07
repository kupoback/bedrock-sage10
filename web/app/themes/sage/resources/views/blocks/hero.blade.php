<div class="{{ $block->classes }}">
	@if ($title)
		<h1>{!! $title !!}</h1>
	@else
		<p>{{ $block->preview ? 'Hero Title' : 'No items found!' }}</p>
	@endif
	
	<div>
		<InnerBlocks />
	</div>
</div>
