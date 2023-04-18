import ReactPaginate from "react-paginate"
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts, setCurrentPage} from "@reduxBlog/postsSlice";

import ChevronRight from "@reactComponent/Icons/ChevronRight";
import ChevronLeft from "@reactComponent/Icons/ChevronLeft";

/**
 * This is the main function for outputting the container of the Pagination
 *
 * @package ReactPaginate https://www.npmjs.com/package/react-paginate
 * @param {Number}   itemsPerPage   The number of items per page
 * @returns {JSX.Element|String}
 * @constructor
 */
function Pagination({itemsPerPage, navClassNames}) {
    const getMaxCount = useSelector((state) => state.maxPages)
    const dispatch = useDispatch();
    const handlePageClick = ({selected}) => {
        const blogElm = document.getElementById('framework-blog');
        const page = selected + 1
        dispatch(setCurrentPage(page))
        dispatch(fetchPosts({page}))
        if (blogElm) {
            let offsetTop = 100;
            if (window.innerWidth > 769) {
                offsetTop = 75;
            }

            window.scrollTo({
                behavior: 'smooth',
                top: (blogElm.offsetTop - offsetTop)
            });
        }
    };

    if (getMaxCount < 1 )return '';

    return (
        <nav className={navClassNames}>
            <ReactPaginate
                activeClassName="active-class border-yellow-400 bg-yellow-400 text-gray-900 hover:border-yellow-400 hover:bg-yellow-400"
                breakClassName="break-indicator block h-8 w-8 m-0 rounded border border-gray-100 text-center text-white leading-8 hover:border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 hover:border-gray-100 hover:bg-transparent hover:text-gray-100"
                breakLabel="..."
                className="flex justify-center gap-1 text-xs font-medium"
                nextLabel={<ChevronRight />}
                nextClassName="next-indicator inline-flex h-8 w-8 m-0 items-center text-white justify-center rounded border border-gray-100 hover:border-yellow-500 hover:bg-yellow-500 hover:text-gray-900"
                onPageChange={handlePageClick}
                pageRangeDisplayed={itemsPerPage}
                pageClassName="page h-8 w-8 m-0 rounded border border-gray-100 text-center leading-8 hover:border-yellow-500 hover:bg-yellow-500 hover:text-gray-900"
                pageCount={getMaxCount}
                pageLinkClassName="page-link text-white"
                previousLabel={<ChevronLeft />}
                previousClassName="previous-indicator inline-flex h-8 w-8 m-0 items-center text-white justify-center rounded border border-gray-100 hover:border-yellow-500 hover:bg-yellow-500 hover:text-gray-900"
                renderOnZeroPageCount={null}
            />
        </nav>
    )
}

export default Pagination;
