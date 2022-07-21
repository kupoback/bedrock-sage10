<a class="sr-only focus:not-sr-only" href="#main" tabindex="0">
	{{ __('Skip to content', 'sage') }}
</a>

@include('sections.header')

<main id="main" class="main">
	@yield('content')
</main>

@include('sections.footer')
