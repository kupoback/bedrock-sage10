<div class="container mx-auto bg-gray-700 text-white banner">
	<div class="max-w-4xl mx-auto px-5 py-10 banner__container">
		@if ($banner_subtitle)
			<div class="banner-subtitle text-xl">
				<p>{!! $banner_subtitle !!}</p>
			</div>
		@endif
		<div class="banner-title text-3xl">
			<h1>{!! $banner_title ?: $pageTitle  !!}</h1>
		</div>
	</div>
</div>
