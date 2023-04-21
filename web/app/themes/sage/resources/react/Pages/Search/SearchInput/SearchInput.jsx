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
        <div className="search__filters">
            <fieldset>
                <label htmlFor="search-input-field"
                       className="search__filters-label">
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
                       className="search__filters-input"/>
            </fieldset>
            <Button
                btnClass="search__filters-button"
                btnType="submit"
                clickHandler={submitSearch}
                content={<span className="">{searchSubmit}</span>}/>
        </div>
    )
}

export default SearchInput;
