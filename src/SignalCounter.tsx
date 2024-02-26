import { computed, signal } from "@preact/signals-react";

const count = signal(0);
const countSquare = computed(() => {
	return count.value * count.value;
});
function SignalCounter() {
	return (
		<div>
			<p>{count}</p>
			<button onClick={() => count.value++}>increment signal </button>
			<div>{new Date().toISOString()}</div>
			<p>the square of the count iss {countSquare}</p>
			<YaJJ value={countSquare.value} />
		</div>
	);
}

function YaJJ({ value }: { value: string | number }) {
	return <h1>{value} is in yajj</h1>;
}

export default SignalCounter;
