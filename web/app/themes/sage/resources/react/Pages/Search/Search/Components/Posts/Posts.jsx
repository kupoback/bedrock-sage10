import {setResultsCount} from "@reactUtil/mixins";
import searchStore from "@zustandSearch/store";

import Loading from "@reactComponent/Loading"
import Post from "@reactComponent/Post";

const Posts = () => {
    const {loading, posts, total} = searchStore(({loading, posts, total}) => ({loading, posts, total,}))

    /**
     * Update the search count
     */
    setResultsCount('results-count', total);

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
