/**
 * React Scripts
 */
import searchStore from "@zustandSearch/store";
import {getQueryParams} from "@reactUtil/browser-history";

/**
 * React Components
 */
import Posts from "./Components/Posts"

function Search({}) {
    const query = getQueryParams();
    query && searchStore.setState({query, searchText: query.s, page: query.page || 1})

    const fetch = searchStore(state => state.fetch);
    // Initial Fetch
    fetch();

    return <Posts />;
}

export default Search;
