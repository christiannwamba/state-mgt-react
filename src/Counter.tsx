import { useState } from "react";
import "./App.css";
import CounterDisplay from "./CounterDisplay";

function Counter() {
	const [count, setCount] = useState(0);

	const countSquare = count * count;

	return (
		<div>
			<CounterDisplay count={count} />
			<button onClick={() => setCount(count + 1)}> increment</button>
			<p> the square of the count is {countSquare}</p>
		</div>
	);
}

export default Counter;
