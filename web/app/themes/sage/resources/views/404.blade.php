@extends('layouts.app')

@section('content')
    @include('partials.page-header', ['classes' => 'error__title'])

    <section class="error__content">
        <div class="wrapper">
            {!! $content ?: '' !!}
        </div>
    </section>
@endsection
