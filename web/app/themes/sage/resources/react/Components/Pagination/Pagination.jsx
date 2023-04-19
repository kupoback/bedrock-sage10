/**
 * React Scripts/Plugins
 */
import ReactPaginate from "react-paginate"

/**
 * React Components
 */
import ChevronRight from "@reactComponent/Icons/ChevronRight";
import ChevronLeft from "@reactComponent/Icons/ChevronLeft";

/**
 * This is the main function for outputting the container of the Pagination
 *
 * @param {Function} clickHandler  The event binding click handler
 * @param {String}   elmId        The element ID string to scroll to
 * @param {Number}   itemsPerPage The number of items per page
 * @param {Number}   maxPages      The maximum number of pages to render
 * @param {String}   navClassNames A list of class names to set for the nav
 * @param {Function} storeState    The store state
 *
 * @returns {JSX.Element|String}
 *
 * @package ReactPaginate https://www.npmjs.com/package/react-paginate
 * @constructor
 */
function Pagination({clickHandler, elmId, itemsPerPage, maxPages, navClassNames, storeState }) {
    const handlePageChange = ({selected}) => {clickHandler(storeState, selected, elmId)};

    if (maxPages < 1) return '';

    return (
        <nav className={navClassNames}>
            <ReactPaginate
                activeClassName="active-class border-yellow-400 bg-yellow-400 text-gray-900 hover:border-yellow-400 hover:bg-yellow-400"
                breakClassName="break-indicator block h-8 w-8 m-0 rounded border border-gray-100 text-center text-white leading-8 hover:border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 hover:border-gray-100 hover:bg-transparent hover:text-gray-100"
                breakLabel="..."
                className="flex justify-center gap-1 text-xs font-medium"
                nextLabel={<ChevronRight/>}
                nextClassName="next-indicator inline-flex h-8 w-8 m-0 items-center text-white justify-center rounded border border-gray-100 hover:border-yellow-500 hover:bg-yellow-500 hover:text-gray-900"
                onPageChange={handlePageChange}
                pageRangeDisplayed={itemsPerPage}
                pageClassName="page h-8 w-8 m-0 rounded border border-gray-100 text-center leading-8 hover:border-yellow-500 hover:bg-yellow-500 hover:text-gray-900"
                pageCount={maxPages}
                pageLinkClassName="page-link text-white"
                previousLabel={<ChevronLeft/>}
                previousClassName="previous-indicator inline-flex h-8 w-8 m-0 items-center text-white justify-center rounded border border-gray-100 hover:border-yellow-500 hover:bg-yellow-500 hover:text-gray-900"
                renderOnZeroPageCount={null}
            />
        </nav>
    )
}

export default Pagination;
