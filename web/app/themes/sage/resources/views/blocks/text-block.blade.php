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
					<ul class="items-list mb-2 text-sm text-gray-300 list-disc">
						@foreach ($items as $item)
							@if ($item)
								<li>
									<p>{{ $item->item }}</p>
									<p>
										@includeWhen(
	                                        $item->link ?? false,
	                                        'includes.anchor',
	                                        [
	                                            'link' => $item->link,
	                                            'classes' => 'font-medium underline text-indigo-300',
	                                        ]
	                                    )
									</p>
								</li>
							@endif
						@endforeach
					</ul>
				@endif
				@if ($cta->url ?? false)
					<div class="external-link">
						@include('includes.anchor', ['link' => $cta, 'classes' => 'font-light underline text-indigo-300'])
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
