import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { authActions } from "./authSlice";

function ReduxComp() {
	const isLoggedIn = useSelector<RootState>((state) => state.auth.isLoggedIn);

	const dispatch = useDispatch();
	return (
		<div>
			<div>
				{isLoggedIn ? (
					<button onClick={() => dispatch(authActions.logoutAction())}>log out</button>
				) : (
					<button onClick={() => dispatch(authActions.loginAction())}>login</button>
				)}
			</div>
		</div>
	);
}

export default ReduxComp;
