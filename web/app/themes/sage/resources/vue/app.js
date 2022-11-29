import {createApp} from "vue";
import {blogStore} from "./Vuex/blog/store";
import {store} from "./vuex/store";

import Blog from "./Pages/Blog/Blog";

const frameworkBlogPostsElm = document.getElementById('framework-blog');

console.log(frameworkBlogPostsElm);

if (frameworkBlogPostsElm) {
    const frameworkBlogComponent = createApp(Blog);
    frameworkBlogComponent
        .use(blogStore)
        .mount('#framework-blog');
}
