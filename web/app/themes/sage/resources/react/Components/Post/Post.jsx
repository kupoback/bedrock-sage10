/**
 * React Component
 */
import ImgSrcSet from "@reactComponent/ImgSrcSet";

function Post({post, firstItem, lastItem, articleClassName}) {
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
		<article className={[
			`post`,
            articleClassName || '', // Class additional for the article
			sticky && "post-sticky", // Class for sticky posts
            firstItem ? "post-first" : '', // Class for first item
			lastItem ? "post-last" : '', // Class for last item or otherwise
		].filter(Boolean).join(" ")}>
			<div className="post__metadata">
				<time dateTime={dateString}
				      className="post__metadata-time">
					{date?.year && <span>{date.year}</span>}
					<span className="post__metadata-separator separator" />
					{date?.date && <span>{date.date}</span>}
				</time>
			</div>

			{Object.keys(image).length !== 0 && (
				<div className="post__image">
					<ImgSrcSet image={image}
                               classNames=""
                               picClassNames="" />
				</div>)}

            <div className="post__body">
                <h3 className="post__body-title title ">
                    <a className="post__body-title__permalink"
                       href={permalink}>{title}</a>
                </h3>

                {author && <p className="post__body-author author">{author}</p>}
                {categories && (
                    <p className="post__body-categories categories">
                        {categories}
                    </p>
                )}

                {excerpt && (
                    <p className="post__body-excerpt excerpt">
                        {excerpt}
                    </p>
                )}
            </div>

            <div className="post__footer">
                <a href={permalink}
                   className="post__footer-permalink">
                    Read More
                </a>
            </div>
		</article>
	);
}

export default Post;
