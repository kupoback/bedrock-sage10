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
document.getElementById('blog') && createApp(Blog).mount('#blog');
document.getElementById('blog-pagination') && createApp(BlogPagination).mount('#blog-pagination');
document.getElementById('blog-filters') && createApp(BlogFilters).mount('#blog-filters')
