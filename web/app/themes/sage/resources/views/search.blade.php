@extends('layouts.app')

@section('content')
    <section class="search">
        <div class="search__header">
            @if ($title ?? false)
                <h2>{!! $title !!}</h2>
            @endif
            @if ($content ?? false)
                <div class="search__header-content">
                    {!! $content !!}
                </div>
            @endif
        </div>
        <div class="search__count">
            <h3>
                {!! $results ?? '' !!} @if (!is_admin()) <span id="results-count">0</span>@endif
            </h3>
        </div>
    </section>

    <section>
        <div class="search__results" id="search-results">
            <div id="search-input"></div>
            <div id="search-container"></div>
            <div id="search-pagination"></div>
        </div>
    </section>
@endsection
