import React from "react";
import "./Button.css";

export default function Button(props) {
	const { onButtonClick, id, className, title, disabled, text } = props;
	
	return (
		<button
			onClick={onButtonClick}
			id={id}
			className={className}
			title={title}
			disabled={disabled}
		>
			{props.children || text}
		</button>
	);
}
