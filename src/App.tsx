import "./App.css";
import AuthPage from "./AuthPage";
import AuthProvider from "./AuthProvider";
import Counter from "./Counter";
import DataFetching from "./DataFetching";
import ObservableCounter from "./ObservableCounter";
import SignalCounter from "./SignalCounter";
import ReduxPage from "./redux/ReduxPage";

function App() {
	return (
		<>
			<Counter />
			<AuthProvider>
				<AuthPage />
			</AuthProvider>
			<SignalCounter />
			<ObservableCounter />
			<DataFetching />
			<ReduxPage />
		</>
	);
}

export default App;
