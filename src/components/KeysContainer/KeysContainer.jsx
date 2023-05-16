import React, { useEffect, useState } from "react";
import { evaluate } from "mathjs";
import Button from "../Button/Button.jsx";
import "./KeysContainer.css";
import "./Display.css";

export default function KeysContainer() {
	const [displayText, setDisplayText] = useState("0");
	const [clickedEqual, setClickedEqual] = useState(false);

	useEffect(() => {
		const keyHandler = (event) => {
			const key = event.currentTarget.id;

			if (key === "clear") {
				setDisplayText("0");
				setClickedEqual(false);
				return;
			}
			if (key === "=") {
				try {
					let calculation = evaluate(displayText);
					setDisplayText(calculation);
					// calculation = Function(
					// 	`"use strict";return (${setDisplayText(calculation).value})`
					// )();
				} catch (error) {
					setDisplayText("error");
				}
				setClickedEqual(true);
				return;
			}
			if (displayText === "0") {
				setDisplayText(key);
				setClickedEqual(false);
			} else {
				if (clickedEqual) {
					setDisplayText(key);
					setClickedEqual(false);
				} else {
					setDisplayText((prevText) => prevText + key);
					setClickedEqual(false);
				}
			}
			event.stopPropagation();
		};

		const activateButtons = () => {
			const keyButtons = document.querySelectorAll(".button");
			keyButtons.forEach((btn) => {
				btn.addEventListener("click", keyHandler);
			});
		};

		activateButtons();

		return () => {
			const keyButtons = document.querySelectorAll(".button");
			keyButtons.forEach((btn) => {
				btn.removeEventListener("click", keyHandler);
			});
		};
	}, [displayText, clickedEqual]);

	return (
		<>
			<div id="display" className="display">
				{displayText}
			</div>
			<div className="clear">
				<Button id="clear" title="clear" className="button button-clear">
					C
				</Button>
			</div>

			<div className="keyboardContainer">
				<div className="numbersContainer">
					<Button id="7" title="7" className="button button-numbers">
						7
					</Button>
					<Button id="8" title="8" className="button button-numbers">
						8
					</Button>
					<Button id="9" title="9" className="button button-numbers">
						9
					</Button>
					<Button id="4" title="4" className="button button-numbers">
						4
					</Button>
					<Button id="5" title="5" className="button button-numbers">
						5
					</Button>
					<Button id="6" title="6" className="button button-numbers">
						6
					</Button>
					<Button id="1" title="1" className="button button-numbers">
						1
					</Button>
					<Button id="2" title="2" className="button button-numbers">
						2
					</Button>
					<Button id="3" title="3" className="button button-numbers">
						3
					</Button>
					<Button id="0" title="0" className="button button-numbers">
						0
					</Button>
					<Button id="." title="decimal" className="button button-specials">
						.
					</Button>
					<Button id="=" title="equal" className="button button-specials">
						=
					</Button>
				</div>
				<div className="operatorsContainer">
					<Button id="/" title="divide" className="button button-operations">
						/
					</Button>
					<Button id="*" title="multiply" className="button button-operations">
						x
					</Button>
					<Button id="-" title="substract" className="button button-operations">
						-
					</Button>
					<Button id="+" title="add" className="button button-operations">
						+
					</Button>
				</div>
			</div>
		</>
	);
}
