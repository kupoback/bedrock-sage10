@extends('layouts.app')

@section('content')
    <section class="container text-white bg-gray-900 mx-auto py-6 search">
        <div class="px-4 pb-6 sm:px-6 lg:px-8">
            <div class="search__header">
                @if ($search_title ?? false)
                    <h2 class="text-white text-3xl font-bold sm:text-4xl search__header-title">{!! $search_title !!}</h2>
                @endif
                @if ($search_content ?? false)
                    <div class="mt-4 search__header-content">
                        {!! $search_content !!}
                    </div>
                @endif
            </div>
        </div>
        <div class="px-4 pb-6 sm:px-6 lg:px-8">
            <h3 class="text-lg font-bold text-white">
                {!! $search_results ?? '' !!}<span id="results-count">: 0</span>
            </h3>
        </div>
        <div class="flex px-4 sm:px-6 lg:px-8 ">
            <div class="flex-1" id="search-results">
                <div id="search-input"></div>
                <div id="search"></div>
                <div id="search-pagination"></div>
            </div>
            {{--
            <aside class="pl-8 flex-initial w-3/12">
                <div id="search-filters"></div>
            </aside>
            --}}
        </div>
    </section>

@endsection
