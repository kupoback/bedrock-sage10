/**
 * Sage Scripts
 */
import {outputClassNames} from "@reactUtil/mixins";

function NoResults(
    {noResultsText = '',
        containerClass = '',
        noResultSClass = '',

    }) {
    return (
        <div className={outputClassNames([containerClass])}>
            <div className={outputClassNames([noResultSClass])}
                 dangerouslySetInnerHTML={{__html: noResultsText}} />
        </div>
    )
}

export default NoResults;
