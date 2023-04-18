import blogStore from "@zustandBlog/store";

import Post from "../Post";
import Loading from "@reactComponent/Loading"

const Posts = () => {
    const {loading, posts, total} = blogStore(({loading, posts, total}) => ({loading, posts, total,}))

    const resultsSpanElm = document.getElementById('results-count');
    if (total && resultsSpanElm) {
        resultsSpanElm.innerText = `: ${total}`
    }

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
