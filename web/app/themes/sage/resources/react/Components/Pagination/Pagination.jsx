import {useEffect, useState} from 'react';
import ReactPaginate from "react-paginate"

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

/**
 * This is the main function for outputting the container of the Pagination
 *
 * @link ReactPaginate https://www.npmjs.com/package/react-paginate
 * @param itemsPerPage
 * @returns {JSX.Element}
 * @constructor
 */
function Pagination({itemsPerPage, maxNumOfPages}) {

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;

    const currentItems = items.slice(itemOffset, endOffset);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <nav className="my-10 blog-listing__results-pagination">
            <ReactPaginate
                activeClassName="border-yellow-400 bg-yellow-400 text-gray-900 hover:border-yellow-400 hover:bg-yellow-400"
                breakClassName="block h-8 w-8 rounded border border-gray-100 text-center leading-8 hover:border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 hover:border-gray-100 hover:bg-transparent hover:text-gray-100"
                breakLabel="..."
                className="flex justify-center gap-1 text-xs font-medium"
                nextLabel=">"
                nextClassName="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 hover:border-yellow-500 hover:bg-yellow-500 hover:text-gray-900"
                onPageChange={handlePageClick}
                pageRangeDisplayed={itemsPerPage}
                pageCount={maxNumOfPages}
                pageLinkClassName="block h-8 w-8 rounded border border-gray-100 text-center leading-8 hover:border-yellow-500 hover:bg-yellow-500 hover:text-gray-900"
                previousLabel="<"
                previousClassName="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 hover:border-yellow-500 hover:bg-yellow-500 hover:text-gray-900"
                renderOnZeroPageCount={null}
            />
        </nav>
    )
}

export default Pagination;
