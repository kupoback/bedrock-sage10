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
     * Makes a fetch of blog posts restarting the page
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
        <div className="rounded border border-gray-100 p-4 posts-listing__filters">
            {filterLabel &&
                <div className="posts-listing__filters-title">
                    <h3 className="text-lg font-bold text-white">{filterLabel}</h3>
                </div>}
            {(typeof taxonomies === 'object' && Object.keys(taxonomies).length !== 0) &&
                <div className="flex max-h-60 overflow-y-scroll py-4 mb-4 posts-listing__filters-terms">
                    <div>
                        {Object.values(taxonomies).map(({id, slug, name}) =>
                            <CategoryItem key={id}
                                          slug={slug}
                                          name={name} />)}
                    </div>
                </div>}
            <div className="pb-4 mb-4 posts-listing__filters-search">
                <fieldset>
                    <label htmlFor="blog-search"
                           className="form-label inline-block mb-2 text-white">
                        {searchLabel}
                    </label>
                    <input type="text"
                           id="blog-search"
                           placeholder={searchPlaceholder}
                           onChange={({target}) => postsStore.setState(() => ({searchText: target.value}))}
                           onKeyDown={({key}) => key === 'Enter' && submitSearch()}
                           className="form-control block w-full px-3 py-1.5 text-base font-normal caret-yellow-500 text-gray-700 bg-white bg-clip-padding border-solid border-2 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-500 focus:outline-none focus:shadow-none"/>
                </fieldset>
            </div>
            <div className="pb-2 posts-listing__filters-submit group flex items-center justify-between">
                <Button
                    btnClass="rounded-lg border border-gray-100 px-5 py-3 transition-colors hover:border-yellow-500 hover:bg-yellow-500 focus:outline-none focus:ring"
                    btnType="submit"
                    clickHandler={submitSearch}
                    content={<span className="font-medium text-white transition-colors">{filterSubmit}</span>}/>
                <Button
                    btnClass="rounded-lg border border-gray-100 px-5 py-3 transition-colors hover:border-yellow-500 hover:bg-yellow-500 focus:outline-none focus:ring"
                    btnType="reset"
                    clickHandler={() => resetForm()}
                    content={<span className="font-medium text-white transition-colors">Reset</span>}/>
            </div>
        </div>
    );
}

export default PostsFilter;
