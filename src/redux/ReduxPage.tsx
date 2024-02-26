import { Provider } from "react-redux";
import ReduxComp from "./ReduxComp";
import { store } from "./store";

function ReduxPage() {
	return (
		<>
			<Provider store={store}>
				<ReduxComp />
			</Provider>
		</>
	);
}

export default ReduxPage;
