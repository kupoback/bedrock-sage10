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
    const {searchNoResults, searchPostLabels} = SEARCH;
    const {read_more} = searchPostLabels;
    const {loading, posts, total} = searchStore(state => state, shallow)

    /**
     * Update the search count
     */
    setResultsCount('results-count', total);

    if (loading) {
        return <Loading fillColor="#ffffff"/>
    }

    if (posts.length) {
        return posts.map((post, index) =>
            <Post key={post.id}
                  post={post}
                  readMore={read_more}
                  firstItem={index === 0}
                  lastItem={index === posts.length - 1}
                  articleClassName="search-post"
            />)
    }

    return <NoResults noResultsText={searchNoResults} />
}

export default Posts;
