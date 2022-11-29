import {createApp} from "vue";

/**
 * Components
 */
import Blog from "./Pages/Blog/Blog";

/**
 * Blog Listing Component
 */
document.getElementById('framework-blog') && createApp(Blog).mount('#framework-blog');
