import { useObservableState } from "observable-hooks";
import { BehaviorSubject, map } from "rxjs";

const counter$ = new BehaviorSubject(0);

const getcounterSquareObservable = () => counter$.pipe(map((count) => count * count));

function ObservableCounter() {
	const val = useObservableState(counter$);
	const [counter] = useObservableState(getcounterSquareObservable);

	console.log({ counter });
	return (
		<div>
			{val}
			<button
				onClick={() => {
					counter$.next(counter$.value + 1);
				}}
			>
				increment observable counter
			</button>
			<div>{new Date().toISOString()}</div>
			<div>{counter}</div>
		</div>
	);
}

export default ObservableCounter;
