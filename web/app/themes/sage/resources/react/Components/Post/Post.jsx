/**
 * Sage Scripts
 */
import {outputClassNames} from "@reactUtil/mixins";

/**
 * React Component
 */
import ImgSrcSet from "@reactComponent/ImgSrcSet";

function Post(
	{
		post,
		firstItem = false,
		lastItem = false,
		articleClassName = '',
		readMore = 'Read More',
		categoryLabel = '',
	}) {
	const {
		author,
		categories,
		date,
		dateString,
		excerpt,
		image,
		permalink,
		sticky,
		title,
	} = post;

	return (
		<article className={outputClassNames([
			`post`,
            articleClassName || '', // Class additional for the article
			sticky && "post-sticky", // Class for sticky posts
            firstItem ? "post-first" : '', // Class for first item
			lastItem ? "post-last" : '', // Class for last item or otherwise
		])}>
            <div className="post__header">
                <h3>
                    <a href={permalink}
                       dangerouslySetInnerHTML={{__html: title}} />
                </h3>
            </div>
			<div className="post__metadata">
				<time dateTime={date}
				      className="post__metadata-time">
                    {dateString}
				</time>
			</div>

			{(image && Object.keys(image).length !== 0) && (
				<div className="post__image">
					<ImgSrcSet image={image}
                               classNames=""
                               picClassNames="" />
				</div>)}

            <div className="post__body">
                {author && <p className="post__body-author author">{author}</p>}
                {categories && (
                    <div className="post__body-categories categories">
                        {categoryLabel && <p dangerouslySetInnerHTML={{__html: categoryLabel}} />}
                        <p dangerouslySetInnerHTML={{__html: categories}} />
                    </div>
                )}

                {excerpt && (
                    <div className="post__body-excerpt excerpt">
                        <p dangerouslySetInnerHTML={{__html: excerpt}} />
                    </div>
                )}
            </div>

            <div className="post__footer">
                <a href={permalink}
                   dangerouslySetInnerHTML={{__html: readMore}} />
            </div>
		</article>
	);
}

export default Post;
