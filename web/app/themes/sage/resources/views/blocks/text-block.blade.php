<div @class([$block->classes ?? false,'text-white bg-gray-900',])>
	<div class="content-container max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mx-auto">
		<div class="grid grid-cols-1 gap-8 mt-8 md:gap-12 md:mt-16 md:grid-cols-2 lg:grid-cols-2">
			<div class="content">
				@if ($title ?? false)
					<div class="header mb-1">
						<h2 class="text-lg font-bold">{!! $title !!}</h2>
					</div>
				@endif
				{!! $content ?? '' !!}
				@if ($items ?? false)
					<ul class="items-list mb-2 text-sm text-gray-300">
						@foreach ($items as $item)
							@if ($item)
								<li>{{ $item->item }}</li>
							@endif
						@endforeach
					</ul>
				@endif
				@if ($cta->url ?? false)
					<div class="external-link">
						<a href="{{$cta->url}}"
						   @if ($cta->target) target="{{$cta->target}}" rel="noopener" @endif
						>
							{!! $cta->title !!}
						</a>
					</div>
				@endif
				{!! $cta_title ?? '' !!}
			</div>
			@if ($image ?? false)
				<div class="photo flex items-center bg-gray-800 rounded-lg">
					{!! \App\Helper\ImageHelper::imgSrcSet($image, ['size' => 'medium']) !!}
				</div>
			@endif
		</div>
	</div>
	<div>
		<InnerBlocks></InnerBlocks>
	</div>
</div>
