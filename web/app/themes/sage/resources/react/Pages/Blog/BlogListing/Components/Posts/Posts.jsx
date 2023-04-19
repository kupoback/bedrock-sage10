/**
 * React Scripts
 */
import {shallow} from "zustand/shallow";
import blogStore from "@zustandBlog/store";
import {setResultsCount} from "@reactUtil/mixins";

/**
 * React Components
 */
import Post from "@reactComponent/Post";
import Loading from "@reactComponent/Loading"

const Posts = () => {
    const {loading, posts, total} = blogStore(state => state, shallow)

    setResultsCount('results-count', total)

    return (
        <>
            {loading && <Loading fillColor="#ffffff"/>}
            {!loading && posts.map(post =>
                <Post key={post.id}
                      post={post}
                      firstItem={post.id === posts[0]?.id}
                      lastItem={post.id === posts.findLast(x => true)?.id}/>)}
        </>
    )
}

export default Posts;
