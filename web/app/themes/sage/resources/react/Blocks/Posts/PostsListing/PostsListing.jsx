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

    return <Posts />;
}

export default PostsListing;
