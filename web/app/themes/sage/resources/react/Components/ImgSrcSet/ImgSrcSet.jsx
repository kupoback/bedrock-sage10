function ImgSrcSet({image}) {
	const {webpSrcset, sizes, srcset, type, src, imageClass, alt} = image;

	return (
		<picture>
			{webpSrcset && <source srcSet={webpSrcset} sizes={sizes} type="image/webp"/>}
			{srcset && <source srcSet={srcset} sizes={sizes} type={type}/>}
			<img className={imageClass}
			     src={src}
			     data-src={src}
			     content={src}
			     alt={alt}
			     role="img"
			     property="v:image"/>
		</picture>
	);
}
export default ImgSrcSet;
