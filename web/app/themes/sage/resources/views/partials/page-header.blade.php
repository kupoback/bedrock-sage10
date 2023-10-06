<section @class([$classes ?? false, 'wrapper', 'hero', 'block'])>
    <div class="hero__title">
        <h1>{!! $title !!}</h1>
    </div>

    @if ($image ?? false)
        <div class="hero__image">
            {!! \App\Helper\ImageHelper::imgSrcSet($image, ['size' => 'banner']) !!}
        </div>
    @endif
</section>
