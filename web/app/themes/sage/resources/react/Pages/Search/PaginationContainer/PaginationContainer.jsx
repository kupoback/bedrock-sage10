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
    const {maxPages} = searchStore(state => state, shallow)

    return (
        <Pagination
            clickHandler={paginationClickHandler}
            elmId="search"
            itemsPerPage={3}
            navClassNames="my-10 pt-10 pb-5 search__results-pagination"
            maxPages={maxPages}
            storeState={searchStore} />
    )
}

export default PaginationContainer;
