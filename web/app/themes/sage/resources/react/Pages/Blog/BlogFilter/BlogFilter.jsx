import {useDispatch, useSelector} from "react-redux";
import {fetchPosts, resetPosts, updateSearchText, updateTaxonomySelected} from "@sageRedux/features/blog/postsSlice";

import CategoryItem from "./Components/CategoryItem";
import Button from "../../../Components/Button";

function BlogFilter({}) {
    const {filterLabel, filterSubmit, searchLabel, searchPlaceholder, taxonomies} = BLOG;
    const searchText = useSelector(state => state.searchText)
    const taxonomySelected = useSelector(state => state.taxonomySelected);
    const dispatch = useDispatch();

    const updateSearch = ({target}) => dispatch(updateSearchText(target.value))
    const updateTaxonomy = (slug) => dispatch(updateTaxonomySelected(slug))

    const submitSearch = () => dispatch(fetchPosts({page: 1, updateSearch: true}))
    const resetSearch = () => {
        dispatch(resetPosts())
        dispatch(fetchPosts({}))
    }

    return (
        <div className="rounded border border-gray-100 p-4 blog-listing__filters">
            {filterLabel &&
                <div className="blog-listing__filters-title">
                    <h3 className="text-lg font-bold text-white">{filterLabel}</h3>
                </div>
            }
            {
                (typeof taxonomies === 'object' && Object.keys(taxonomies).length !== 0) &&
                <div className="flex max-h-60 overflow-y-scroll py-4 mb-4 blog-listing__filters-terms">
                    <div>
                        {Object.values(taxonomies).map(({id, slug, name}) =>
                            <CategoryItem key={id}
                                          slug={slug}
                                          name={name}
                                          taxSelected={(slug) => updateTaxonomy(slug)}
                            />)
                        }
                    </div>
                </div>
            }
            <div className="pb-4 mb-4 blog-listing__filters-search">
                <fieldset>
                    <label htmlFor="blog-search"
                           className="form-label inline-block mb-2 text-white">
                        {searchLabel}
                    </label>
                    <input type="text"
                           id="blog-search"
                           placeholder={searchPlaceholder}
                           onChange={updateSearch}
                           onKeyDown={({key}) => key === 'Enter' && submitSearch()}
                           className="form-control block w-full px-3 py-1.5 text-base font-normal caret-yellow-500 text-gray-700 bg-white bg-clip-padding border-solid border-2 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-500 focus:outline-none focus:shadow-none"
                    />
                </fieldset>
            </div>
            <div className="pb-2 blog-listing__filters-submit group flex items-center justify-between">
                <Button
                    btnClass="rounded-lg border border-gray-100 px-5 py-3 transition-colors hover:border-yellow-500 hover:bg-yellow-500 focus:outline-none focus:ring"
                    btnType="submit"
                    clickHandler={submitSearch}
                    content={
                        <span className="font-medium text-white transition-colors">{filterSubmit}</span>}
                />
                <Button
                    btnClass="rounded-lg border border-gray-100 px-5 py-3 transition-colors hover:border-yellow-500 hover:bg-yellow-500 focus:outline-none focus:ring"
                    btnType="reset"
                    clickHandler={resetSearch}
                    content={
                        <span className="font-medium text-white transition-colors">Reset</span>}
                />
            </div>
        </div>
    );
}

export default BlogFilter;
