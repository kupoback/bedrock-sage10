import ImgSrcSet from "react/Components/ImgSrcSet";

function BlogPost({post, firstItem, lastItem}) {
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
			`flex bg-white transition hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-800/25`,
			sticky && "border-2 border-dark dark:border-white rounded-lg",
			!firstItem && !lastItem && "my-12",
			firstItem && "mt-0",
			lastItem && "my-6",
		].filter(Boolean).join(" ")}>
			<div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
				<time dateTime={dateString}
				      className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white">
					{date?.year && <span>{date.year}</span>}
					<span className="w-px flex-1 bg-gray-900/10 dark:bg-white/10"/>
					{date?.date && <span>{date.date}</span>}
				</time>
			</div>

			{Object.keys(image).length !== 0 && (
				<div className="hidden sm:block sm:basis-56">
					<ImgSrcSet image={image}/>
				</div>)}
			<div className="flex flex-1 flex-col justify-between">
				<div className="border-l border-gray-900/10 p-4 dark:border-white/10 sm:!border-l-transparent sm:p-6">
					<a href={permalink}>
						<h3 className="font-bold uppercase text-gray-900 dark:text-white">
							{title}
						</h3>
					</a>
					{author && <p className="author">By: {author}</p>}
					{categories && (
						<p className="categories">
							<small>{categories}</small>
						</p>
					)}

					{excerpt.length && (
						<p className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3 dark:text-gray-200">
							{excerpt}
						</p>
					)}
				</div>

				<div className="sm:flex sm:items-end sm:justify-end">
					<a href={permalink}
					   className="block bg-yellow-400 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-500">
						Read More
					</a>
				</div>
			</div>
		</article>
	);
}

export default BlogPost;
