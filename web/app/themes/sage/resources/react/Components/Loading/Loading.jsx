function Loading({loadingClass = 'loading-element', fillColor = ''}) {
    return (
        <div className={loadingClass}>
            <svg id="L4" xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink"
                 x="0px"
                 y="0px"
                 viewBox="0 0 100 50"
                 xmlSpace="preserve">
                <circle fill={fillColor} stroke="none" cx="32" cy="25" r="6">
                    <animate
                        attributeName="opacity"
                        dur="1s"
                        values="0;1;0"
                        repeatCount="indefinite"
                        begin="0.1"/>
                </circle>
                <circle fill="#facc15" stroke="none" cx="50" cy="25" r="6">
                    <animate
                        attributeName="opacity"
                        dur="1s"
                        values="0;1;0"
                        repeatCount="indefinite"
                        begin="0.2"/>
                </circle>
                <circle fill={fillColor} stroke="none" cx="68" cy="25" r="6">
                <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite"
                    begin="0.3"/>
            </circle>
            </svg>
        </div>
    );
}

export default Loading;
