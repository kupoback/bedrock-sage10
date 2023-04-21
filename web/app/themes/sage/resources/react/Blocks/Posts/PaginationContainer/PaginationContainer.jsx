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
    const {maxPages} = postsStore(state => state, shallow)

    return (
        <Pagination
            clickHandler={paginationClickHandler}
            elmId="posts"
            itemsPerPage={3}
            navClassNames="my-10 pt-10 pb-5 search__results-pagination"
            maxPages={maxPages}
            storeState={postsStore} />
    )
}
export default PaginationContainer;
