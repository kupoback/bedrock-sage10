function NoResults(
    {noResultsText = '',
        containerClass = '',
        noResultSClass = '',

    }) {
    return (
        <div className={containerClass}>
            <div className={noResultSClass}
                 dangerouslySetInnerHTML={{__html: noResultsText}} />
        </div>
    )
}

export default NoResults;
