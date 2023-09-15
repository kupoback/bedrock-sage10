@extends('layouts.app')

@section('content')
    <section class="search">
        <div class="search__header">
            @if ($title ?? false)
                <h2 class="search__header-title">{!! $title !!}</h2>
            @endif
            @if ($content ?? false)
                <div class="search__header-content">
                    {!! $content !!}
                </div>
            @endif
        </div>
        <div class="search__count">
            <h3 class="search__count-title">
                {!! $results ?? '' !!}<span id="results-count" class="search__count-title__results">: 0</span>
            </h3>
        </div>
    </section>

    <section>
        <div class="search__results" id="search-results">
            <div id="search-input"></div>
            <div id="search"></div>
            <div id="search-pagination"></div>
        </div>
    </section>
@endsection
