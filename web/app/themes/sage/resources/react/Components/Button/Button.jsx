function Button({btnClass, btnType, content, clickHandler}) {
	return <button className={btnClass}
                   type={btnType}
                   onClick={clickHandler}>{content}</button>
}

export default Button;
