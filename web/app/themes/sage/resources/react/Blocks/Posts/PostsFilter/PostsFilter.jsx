/**
 * React Scripts
 */
import postsStore from "@zustandPosts/store";
import {setPage} from "@reactUtil/mixins";
import {shallow} from "zustand/shallow";

/**
 * React Components
 */
import Button from "@reactComponent/Button";
import CategoryItem from "./Components/CategoryItem";

function PostsFilter({}) {
    const {
        filterLabel,
        filterSubmit,
        searchLabel,
        searchPlaceholder,
        taxonomies
    } = POSTS;
    const {fetch, reset} = postsStore(state => state, shallow)

    /**
     * Makes a fetch of posts restarting the page
     */
    const submitSearch = () => {
        setPage(1, postsStore)
        fetch(true);
    }
    /**
     * Resets the search form entirely
     */
    const resetForm = () => {
        reset()
        document.getElementById('posts-search').value = '';
        fetch(true);
    }

    return (
        <div className="posts-listing__filters">
            {filterLabel &&
                <div className="posts-listing__filters-title">
                    <h3 className="">{filterLabel}</h3>
                </div>}
            {(typeof taxonomies === 'object' && Object.keys(taxonomies).length !== 0) &&
                <div className="posts-listing__filters-terms">
                    <div>
                        {Object.values(taxonomies).map(({id, slug, name}) =>
                            <CategoryItem key={id}
                                          slug={slug}
                                          name={name} />)}
                    </div>
                </div>}
            <div className="posts-listing__filters-search">
                <fieldset>
                    <label htmlFor="posts-search"
                           className="">
                        {searchLabel}
                    </label>
                    <input type="text"
                           id="posts-search"
                           placeholder={searchPlaceholder}
                           onChange={({target}) => postsStore.setState(() => ({searchText: target.value}))}
                           onKeyDown={({key}) => key === 'Enter' && submitSearch()}
                           className=""/>
                </fieldset>
            </div>
            <div className="posts-listing__filters-submit">
                <Button
                    btnClass=""
                    btnType="submit"
                    clickHandler={submitSearch}
                    content={<span className="">{filterSubmit}</span>}/>
                <Button
                    btnClass=""
                    btnType="reset"
                    clickHandler={() => resetForm()}
                    content={<span className="">Reset</span>}/>
            </div>
        </div>
    );
}

export default PostsFilter;
