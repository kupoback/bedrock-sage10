// Example Data
import {posts, total} from "../../../Util/posts.json"

/**
 * React Components
 */
import Posts from "../../../Redux/features/blog/Posts"

function BlogListing({}) {
	const resultsSpanElm = document.getElementById('results-count');
	resultsSpanElm.innerText = `: ${total.toString()}`

	return (
		<div className="blog-listing__results">
			<Posts />
		</div>
	);
}

export default BlogListing;
