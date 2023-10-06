/**
 * Sage Scripts
 */
import {outputClassNames} from "@reactUtil/mixins";

function Button({btnClass, btnType, content, clickHandler}) {
	return <button className={outputClassNames(['btn', btnClass])}
                   type={btnType}
                   onClick={clickHandler}>{content}</button>
}

export default Button;
