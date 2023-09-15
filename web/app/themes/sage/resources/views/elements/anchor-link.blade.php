@php $link = \App\Helper\Helper::convertArrayToObject($link); @endphp
@if ($link->url ?? false)
	<a href="{!! $link->url !!}"
	   @if ($classes ?? false) @class([$classes]) @endif
	   @if ($link->target ?? false) target="{!! $link->target !!}" rel="noopener" @endif
	>{!! $link->title !!}</a>
@endif
