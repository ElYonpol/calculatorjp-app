import Display from "../Display/Display.jsx";
import KeysContainer from "../KeysContainer/KeysContainer.jsx";
import "./CalculatorContainer.css";

export default function CalculatorContainer(props) {
	return (
		<div className="calculatorContainer">
			<Display id="calcDisplay" />
			<KeysContainer id="calcKeys" />
		</div>
	);
}
