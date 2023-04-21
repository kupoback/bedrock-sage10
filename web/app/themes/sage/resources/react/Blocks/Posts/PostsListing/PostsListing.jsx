/**
 * React Scripts
 */
import postsStore from "@zustandPosts/store";

/**
 * React Components
 */
import Posts from "./Components/Posts"

function PostsListing({}) {
    const fetch = postsStore(state => state.fetch);
    // Initial Fetch
    fetch();

    return (
    	<div className="posts-listing__results">
            <Posts />
    	</div>
    );
}

export default PostsListing;
