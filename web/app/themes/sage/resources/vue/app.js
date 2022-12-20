import {createApp} from "vue";

/**
 * Components
 */
import Blog from "./Pages/Blog/Blog";
import BlogFilters from "./Pages/Blog/BlogFilters.vue";

/**
 * Blog Listing Component
 */
document.getElementById('framework-blog') && createApp(Blog).mount('#framework-blog');
document.getElementById('framework-filters') && createApp(BlogFilters).mount('#framework-filters')
