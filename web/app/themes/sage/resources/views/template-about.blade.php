{{--
  Template Name: About Template
--}}

@extends('layouts.app')

@section('content')
	@while(have_posts()) @php(the_post())
		@include('banners.about-banner')
		@include('partials.content-about')
	@endwhile
@endsection
