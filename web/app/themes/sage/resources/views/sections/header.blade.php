<header class="banner">
	<div class="container flex flex-wrap justify-between rounded border-gray-200 bg-gray-900 items-center mx-auto px-2 sm:px-4 py-2.5">
		<a class="flex items-center text-white" href="{{ home_url('/') }}">
			{!! $siteName !!}
		</a>
		
		@if (has_nav_menu('primary_navigation'))
			<nav class="nav-primary" aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
				{!! wp_nav_menu(
					  [
						  'theme_location' => 'primary_navigation',
						  'container_class' => 'hidden w-full md:block md:w-auto',
						  'menu_class' => 'flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700',
						  'echo' => false
					  ]
					) !!}
			</nav>
		@endif
	</div>
</header>
