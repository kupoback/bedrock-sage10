function NoResults(
    {noResultsText = '',
        containerClass = 'flex bg-white transition hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-800/25 border-2 border-dark dark:border-white rounded-lg my-12'

    }) {
    return (
        <div className={containerClass}>
            <div >
                <div className="flex flex-1 flex-col justify-between">
                    <div className="border-l border-gray-900/10 p-4 dark:border-white/10 sm:!border-l-transparent sm:p-6">
                        <div className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3 dark:text-gray-200"
                             dangerouslySetInnerHTML={{__html: noResultsText}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoResults;
