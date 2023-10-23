@if ($social_media->isNotEmpty())
    <ul @class(['social-media'])>
        @foreach ($social_media as $key => $social)
            @isset($social->link)
                <li @class(['social-media__icon', "icon-$key"])>
                    <a href="{!! $social->link !!}">
                        {!! $social->icon->contents() !!}
                    </a>
                </li>
            @endisset
        @endforeach
    </ul>
@endif
