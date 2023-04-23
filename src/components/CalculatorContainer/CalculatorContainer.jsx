import Button from "../Button/Button.jsx";
import "./CalculatorContainer.css"

export default function CalculatorContainer(props) {
	return (
		<div className="container">
			<Button title="9" className="button button-numbers">
				9
			</Button>
			<Button title="8" className="button button-numbers">
				8
			</Button>
			<Button title="7" className="button button-numbers">
				7
			</Button>
			<Button title="6" className="button button-numbers">
				6
			</Button>
			<Button title="5" className="button button-numbers">
				5
			</Button>
			<Button title="4" className="button button-numbers">
				4
			</Button>
			<Button title="3" className="button button-numbers">
				3
			</Button>
			<Button title="2" className="button button-numbers">
				2
			</Button>
			<Button title="1" className="button button-numbers">
				1
			</Button>
			<Button title="0" className="button button-numbers">
				0
			</Button>
		</div>
	);
}
