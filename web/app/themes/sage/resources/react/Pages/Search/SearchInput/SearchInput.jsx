/**
 * React Scripts
 */
import searchStore from "@zustandSearch/store";
import {setPage} from "@reactUtil/mixins";
import {shallow} from "zustand/shallow";

/**
 * React Components
 */
import Button from "@reactComponent/Button";

function SearchInput() {
    const {searchLabel, searchPlaceholder, searchSubmit} = SEARCH;
    const {fetch, reset} = searchStore(state => state, shallow)

    /**
     * Makes a fetch of blog posts restarting the page
     */
    const submitSearch = () => {
        setPage(1, searchStore)
        fetch(true);
    }
    /**
     * Resets the search form entirely
     */
    const resetForm = () => {
        reset()
        document.getElementById('search-input-field').value = '';
        fetch(true);
    }

    return (
        <div className="rounded border border-gray-100 p-4 search__input">
            <div className="flex pb-4 mb-4 search__filters-search">
                <fieldset className="w-9/12">
                    <label htmlFor="search-input-field"
                           className="form-label inline-block mb-2 text-white">
                        {searchLabel}
                    </label>
                    <input type="text"
                           id="search-input-field"
                           placeholder={searchPlaceholder}
                           onChange={({target}) => searchStore.setState(() => ({searchText: target.value}))}
                           onKeyDown={({key}) => key === 'Enter' && submitSearch()}
                           className="form-control block w-full px-3 py-1.5 text-base font-normal caret-yellow-500 text-gray-700 bg-white bg-clip-padding border-solid border-2 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-500 focus:outline-none focus:shadow-none"/>

                </fieldset>
                <Button
                    btnClass="rounded-lg w-3/12 border border-gray-100 px-5 py-3 transition-colors hover:border-yellow-500 hover:bg-yellow-500 focus:outline-none focus:ring"
                    btnType="submit"
                    clickHandler={submitSearch}
                    content={<span className="font-medium text-white transition-colors">{searchSubmit}</span>}/>
            </div>
        </div>
    )
}

export default SearchInput;
