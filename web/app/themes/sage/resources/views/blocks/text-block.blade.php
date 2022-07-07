<div class="{{ $block->classes }}">
	@if ($title ?? false)
		<div class="header">
			{!! $title !!}
		</div>
	@endif
	{!! $content ?? '' !!}
	@if ($items ?? false)
		<ul>
			@foreach ($items as $item)
				<li>{{ $item['item'] }}</li>
			@endforeach
		</ul>
	@endif
	
	@if ($image ?? false)
		{!! \App\Helper\ImageHelper::imgSrcSet($image, ['size' => 'medium']) !!}
	@endif
	
	@if (($cta['url'] ?? false) && $cta['url'])
		<div class="external-link">
			<a href="{{$cta['url']}}" @if ($cta['target']) target="{{$cta['target']}}" rel="noopener" @endif >
				{!! $cta['title'] !!}
			</a>
		</div>
	@endif
	
	<div>
		<InnerBlocks />
	</div>
</div>
