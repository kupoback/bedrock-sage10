<header class="banner">
	<div class="container">
		{{-- Uncomment for Vue Navigation --}}
		{{-- Vue Based Navigation --}}
		{{-- <div id="vue-navigation-container"></div>--}}
		
		{{-- WordPress default Navigation --}}
		
		<a class="brand" href="{{ home_url('/') }}">{{ get_bloginfo('name', 'display') }}</a>
		<nav class="nav-primary">
			@if (has_nav_menu('primary_navigation'))
				{!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']) !!}
			@endif
		</nav>
	</div>
</header>
