@php $link = \App\Helper\Helper::convertArrayToObject($link); @endphp
@isset($link->url)
	<a href="{!! $link->url !!}"
	   @isset($classes) @class([\App\Helper\Helper::filterBladeClasses($classes)]) @endisset
	   @isset($link->target) target="{!! $link->target !!}" rel="noopener" @endisset
	>{!! $link->title !!}</a>
@endisset
