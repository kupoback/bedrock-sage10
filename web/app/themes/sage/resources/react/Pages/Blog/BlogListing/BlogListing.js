import Post from "./Components/Post";
// Example Data
import {posts} from "../../../Util/posts.json"

function BlogListing({}) {

	return (
		<div className="blog-listing__results">
			{posts.map(post =>
				<Post key={post.id}
				      post={post}
				      firstItem={post.id === posts[0]?.id}
				      lastItem={post.id === posts.findLast(x => true)?.id}/>)}
		</div>
	);
}

export default BlogListing;
