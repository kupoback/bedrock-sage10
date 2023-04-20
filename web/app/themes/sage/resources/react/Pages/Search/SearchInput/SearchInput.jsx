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
    const {fetch, reset, searchText} = searchStore(state => state, shallow)

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

    const searchValue = searchText.length ? searchText : '';

    return (
        <div className="rounded border border-gray-100 p-4 search__input">
            <div className="relative search__filters-search">
                <label htmlFor="search-input-field"
                       className="form-label inline-block mb-2 text-white sr-only">
                    {searchLabel}
                </label>
                <input type="text"
                       id="search-input-field"
                       placeholder={searchPlaceholder}
                       aria-placeholder={searchPlaceholder}
                       value={searchValue}
                       aria-valuetext={searchValue}
                       onChange={({target}) => searchStore.setState(() => ({searchText: target.value}))}
                       onKeyDown={({key}) => key === 'Enter' && submitSearch()}
                       className="form-control block w-full px-3 py-1.5 text-base font-normal caret-yellow-500 text-gray-700 bg-white bg-clip-padding border-solid border-2 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-500 focus:outline-none focus:shadow-none"/>
                <span className="absolute block inset-y-0 end-0 grid w-50 mx-2 place-content-center">
                    <Button
                        btnClass="rounded-lg bg-yellow-400 border border-yellow-400 p-2 transition-colors hover:border-yellow-500 hover:bg-yellow-500 focus:outline-none focus:ring flex align-content-center"
                        btnType="submit"
                        clickHandler={submitSearch}
                        content={<span className="text-xs font-bold uppercase text-gray-900 transition-colors">{searchSubmit}</span>}/>
                </span>
            </div>
        </div>
    )
}

export default SearchInput;
