import {useSelector} from "react-redux";
import {fetchPosts} from "../../../Redux/features/blog/postsSlice";
import {store} from "../../../Redux/features/blog/store"
/**
 * React Components
 */
import Loading from "../../../Components/Loading";
import Posts from "./Components/Posts"

store.dispatch(fetchPosts({}));

function BlogListing({}) {
    const loading = useSelector((state) => state.loading)
    const total = useSelector(state => state.total)
    const posts = useSelector(state => state.posts)

    if (total) {
        const resultsSpanElm = document.getElementById('results-count');
        resultsSpanElm.innerText = `: ${total.toString()}`
    }

	return (
		<div className="blog-listing__results">
            {loading && <Loading fillColor="#ffffff" />}
            {(!loading && posts.length) && <Posts posts={posts} />}
		</div>
	);
}

export default BlogListing;
