<footer class="content-info">
  @php(dynamic_sidebar('sidebar-footer'))
    <x-social-share url="{!! get_the_permalink() !!}" :texts="[]"/>
</footer>
