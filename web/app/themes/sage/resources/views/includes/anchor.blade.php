<a href="{{$link->url}}"
   @class($classes ?? [])
   @if ($link->target) target="{{$link->target}}" rel="noopener" @endif
>
   {!! $link->title !!}
</a>