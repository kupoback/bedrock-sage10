/**
 * React Scripts/Plugins
 */
import postsStore from "@zustandPosts/store";
import {paginationClickHandler} from "@reactUtil/mixins";
import {shallow} from "zustand/shallow";

/**
 * React Components
 */
import Pagination from "@reactComponent/Pagination";

/**
 * This is the main function for outputting the container of the Pagination
 *
 * @returns {JSX.Element|String}
 *
 * @package ReactPaginate https://www.npmjs.com/package/react-paginate
 * @constructor
 */
function PaginationContainer() {
    const {maxPages, page} = postsStore(state => state, shallow)

    return (
        <Pagination
            clickHandler={paginationClickHandler}
            currentPage={(page - 1) || 0}
            elmId="posts"
            itemsPerPage={3}
            navClassNames="posts__results-pagination"
            maxPages={maxPages}
            storeState={postsStore} />
    )
}
export default PaginationContainer;
