import {createApp} from "vue";

/**
 * Components
 */
import Blog from "./Blog";
import BlogPagination from "./BlogPagination";
import BlogFilters from "./BlogFilters";

/**
 * Blog Listing Component
 */
document.getElementById('framework-blog') && createApp(Blog).mount('#framework-blog');
document.getElementById('framework-pagination') && createApp(BlogPagination).mount('#framework-pagination');
document.getElementById('framework-filters') && createApp(BlogFilters).mount('#framework-filters')
