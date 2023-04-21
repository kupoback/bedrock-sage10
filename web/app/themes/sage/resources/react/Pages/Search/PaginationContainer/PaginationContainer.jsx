/**
 * React Scripts/Plugins
 */
import searchStore from "@zustandSearch/store";
import {paginationClickHandler} from "@reactUtil/mixins";
import {shallow} from "zustand/shallow";

/**
 * React Components
 */
import Pagination from "@reactComponent//Pagination";

/**
 * This is the main function for outputting the container of the Pagination
 *
 * @returns {JSX.Element|String}
 *
 * @package ReactPaginate https://www.npmjs.com/package/react-paginate
 * @constructor
 */
function PaginationContainer() {
    const {maxPages, page} = searchStore(state => state, shallow)

    return (
        <Pagination
            clickHandler={paginationClickHandler}
            currentPage={(page - 1) || 0}
            elmId="search"
            itemsPerPage={3}
            navClassNames="search__results-pagination pagination"
            maxPages={maxPages}
            storeState={searchStore} />
    )
}

export default PaginationContainer;
