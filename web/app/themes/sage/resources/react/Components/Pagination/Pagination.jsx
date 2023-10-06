/**
 * React Scripts/Plugins
 */
import ReactPaginate from "react-paginate"

/**
 * Sage Scripts
 */
import {outputClassNames} from "@reactUtil/mixins";

/**
 * React Components
 */
import ChevronRight from "@reactComponent/Icons/ChevronRight";
import ChevronLeft from "@reactComponent/Icons/ChevronLeft";

/**
 * This is the main function for outputting the container of the Pagination
 *
 * @param {Function} clickHandler   The event binding click handler
 * @param {Number}   currentPage    The current page to be forced
 * @param {String}   elmId          The element ID string to scroll to
 * @param {Number}   itemsPerPage   The number of items per page
 * @param {Number}   maxPages       The maximum number of pages to render
 * @param {String}   navClassNames  A list of class names to set for the nav
 * @param {Function} storeState     The store state
 *
 * @returns {JSX.Element|String}
 *
 * @package ReactPaginate https://www.npmjs.com/package/react-paginate
 * @constructor
 */
function Pagination({clickHandler, currentPage = 1, elmId, itemsPerPage, maxPages, navClassNames, storeState }) {

    /**
     * Bindings for the event handler on the page number clicks
     *
     * @param {Boolean} isActive            Whether this element is active
     * @param {Boolean} isBreak             Whether this element is the break tag
     * @param {Boolean} isNext              Whether this element is the next tag
     * @param {Boolean} isPrevious          Whether this element is the previous tag
     * @param {Number}  nextSelectedPage    What the current index of the page selected is. It will always be 1 number behind actual value
     *
     * @returns {false|*|boolean}
     */
    const handlePageChange = ({ isActive, isBreak, isNext, isPrevious, nextSelectedPage }) => {
        if (isBreak || isActive) {
            return false;
        }

        const nextPage = nextSelectedPage + 1;

        if (nextPage > 0 && nextPage <= maxPages) {
            clickHandler(storeState, nextPage, elmId);
            return true;
        }

        return false;
    };

    const disableActive = () => false;

    if (maxPages < 1) return '';

    return (
        <nav className={outputClassNames([`pagination`, navClassNames || '',])} role="navigation">
            <ReactPaginate
                activeClassName="active-class "
                breakClassName="break-indicator"
                breakLabel="..."
                className=""
                forcePage={currentPage}
                nextLabel={<ChevronRight/>}
                nextClassName="next-indicator"
                onClick={handlePageChange}
                onPageActive={disableActive}
                pageRangeDisplayed={itemsPerPage}
                pageClassName="page"
                pageCount={maxPages}
                pageLinkClassName="page-link"
                previousLabel={<ChevronLeft/>}
                previousClassName="previous-indicator"
                renderOnZeroPageCount={null}
            />
        </nav>
    )
}

export default Pagination;
