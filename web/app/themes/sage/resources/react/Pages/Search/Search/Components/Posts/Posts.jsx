/**
 * React Scripts
 */
import {shallow} from "zustand/shallow";
import {setResultsCount} from "@reactUtil/mixins";
import searchStore from "@zustandSearch/store";

/**
 * React Components
 */
import Loading from "@reactComponent/Loading"
import Post from "@reactComponent/Post";
import NoResults from "@reactComponent/NoResults";

const Posts = () => {
    const {searchNoResults} = SEARCH;
    const {loading, posts, total} = searchStore(state => state, shallow)

    /**
     * Update the search count
     */
    setResultsCount('results-count', total);

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

    return <NoResults noResultsText={searchNoResults} />
}

export default Posts;
