/**
 * Sage Scripts
 */
import {outputClassNames} from "@reactUtil/mixins";

function ImgSrcSet({classNames, image, picClassNames}) {
	const {webpSrcset, sizes, srcset, type, src, imageClass, alt} = image;
    const imageClassNames = [classNames, imageClass || ''];
	return (
		<picture className={picClassNames}>
			{webpSrcset && <source srcSet={webpSrcset} sizes={sizes} type="image/webp"/>}
			{srcset && <source srcSet={srcset} sizes={sizes} type={type}/>}
			<img className={outputClassNames(imageClassNames)}
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
