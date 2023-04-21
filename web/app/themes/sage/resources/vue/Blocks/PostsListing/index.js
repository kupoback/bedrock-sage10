import {createApp} from "vue";

/**
 * Components
 */
import Posts from "./Posts";
import PostPagination from "./PostPagination";
import PostFilters from "./PostFilters";

/**
 * Blog Listing Component
 */
document.getElementById('posts-listing') && createApp(Posts).mount('#posts-listing');
document.getElementById('posts-pagination') && createApp(PostPagination).mount('#posts-pagination');
document.getElementById('posts-filters') && createApp(PostFilters).mount('#posts-filters')
