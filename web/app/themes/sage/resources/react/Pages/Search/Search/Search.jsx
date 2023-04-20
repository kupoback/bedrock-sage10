/**
 * React Scripts
 */
import searchStore from "@zustandSearch/store";
import {objectNotEmpty} from "@reactUtil/mixins";
import {getQueryParams} from "@reactUtil/browser-history";

/**
 * React Components
 */
import Posts from "./Components/Posts"

function Search({}) {
    const query = getQueryParams();
    if (objectNotEmpty(query)) {
        searchStore.setState({query, searchText: query.s, page: query.page || 1})
    }

    const fetch = searchStore(state => state.fetch);
    // Initial Fetch
    fetch();

    return (
    	<div className="search__results">
            <Posts />
    	</div>
    );
}

export default Search;
