import React from "react";
import "./Button.css";

export default function Button(props) {
	const { onButtonClick, className, title, disabled, text } = props;
	
	return (
		<button
			onClick={onButtonClick}
			className={className}
			title={title}
			disabled={disabled}
		>
			{props.children || text}
		</button>
	);
}
