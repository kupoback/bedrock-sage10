/**
 * React Scripts
 */
import searchStore from "@zustandSearch/store";

/**
 * React Components
 */
import Posts from "./Components/Posts"

function Search({}) {
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
