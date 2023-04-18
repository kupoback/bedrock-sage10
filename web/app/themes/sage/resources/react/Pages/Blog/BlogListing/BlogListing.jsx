import blogStore from "@zustandBlog/store";

/**
 * React Components
 */
import Posts from "./Components/Posts"

function BlogListing({}) {
    const fetch = blogStore(state => state.fetch);
    // Initial Fetch
    fetch();

    return (
    	<div className="blog-listing__results">
            <Posts />
    	</div>
    );
}

export default BlogListing;
