<section class="container mx-auto p-10 text-white bg-gray-900 about-section">
	@if ($about_title)
		<div class="about-section__title text-2xl  mb-4">
			<h2>{!! $about_title !!}</h2>
		</div>
	@endif
	@if ($about_content)
		<div class="about-section__content mb-2">
			{!! $about_content !!}
		</div>
	@endif
	@if ($about_cta->url ?? false)
		<div class="about-section__cta mb-4">
			@include('includes.anchor', ['link' => $about_cta, 'classes' => 'about-section__cta-link underline'])
		</div>
	@endif
</section>
