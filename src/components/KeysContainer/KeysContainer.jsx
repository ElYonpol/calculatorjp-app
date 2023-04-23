import Button from "../Button/Button.jsx";
import "./KeysContainer.css";

export default function KeysContainer(props) {
	return (
		<div className="keyboardContainer">
			<div className="numbersContainer">
				<Button id="9" title="9" className="button button-numbers">
					9
				</Button>
				<Button id="8" title="8" className="button button-numbers">
					8
				</Button>
				<Button id="7" title="7" className="button button-numbers">
					7
				</Button>
				<Button id="6" title="6" className="button button-numbers">
					6
				</Button>
				<Button id="5" title="5" className="button button-numbers">
					5
				</Button>
				<Button id="4" title="4" className="button button-numbers">
					4
				</Button>
				<Button id="3" title="3" className="button button-numbers">
					3
				</Button>
				<Button id="2" title="2" className="button button-numbers">
					2
				</Button>
				<Button id="1" title="1" className="button button-numbers">
					1
				</Button>
				<Button id="0" title="0" className="button button-numbers">
					0
				</Button>
				<Button
					id="decimal"
					title="decimal"
					className="button button-specials"
				>
					.
				</Button>
				<Button id="equal" title="equal" className="button button-specials">
					=
				</Button>
			</div>
			<div className="operatorsContainer">
				<Button id="divide" title="divide" className="button button-operations">
					/
				</Button>
				<Button
					id="multiply"
					title="multiply"
					className="button button-operations"
				>
					x
				</Button>
				<Button
					id="substract"
					title="substract"
					className="button button-operations"
				>
					-
				</Button>
				<Button id="add" title="add" className="button button-operations">
					+
				</Button>
			</div>
		</div>
	);
}
