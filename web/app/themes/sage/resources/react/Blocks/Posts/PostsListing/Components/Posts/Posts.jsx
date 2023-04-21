/**
 * React Scripts
 */
import {shallow} from "zustand/shallow";
import {setResultsCount} from "@reactUtil/mixins";
import postsStore from "@zustandPosts/store";

/**
 * React Components
 */
import Post from "@reactComponent/Post";
import Loading from "@reactComponent/Loading"
import NoResults from "@reactComponent/NoResults";

const Posts = () => {
    const {noResults} = POSTS;
    const {loading, posts, total} = postsStore(state => state, shallow)

    /**
     * Update the search count
     */
    setResultsCount('results-count', total)

    if (loading) {
        return <Loading fillColor="#ffffff"/>
    }

    if (posts.length) {
        return posts.map(post =>
            <Post key={post.id}
                  post={post}
                  firstItem={post.id === posts[0]?.id}
                  lastItem={post.id === posts.findLast(x => true)?.id}/>)
    }

    return <NoResults noResultsText={noResults} />
}

export default Posts;
