function Button({ text, color, style, size, onClickHandler, isDisabled = false, children }) {
	return (
		<button disabled={isDisabled} onClick={onClickHandler} className={`btn ${color} ${style} ${size}`}>
			{children}
			{text}
		</button>
	);
}

export default Button;
