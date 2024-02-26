import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function AuthPage() {
	return <LoginForm />;
}

export default AuthPage;

function LoginForm() {
	const { isLoggedIn, login, logOut } = useContext(AuthContext);

	return (
		<div>{isLoggedIn ? <button onClick={logOut}>log out</button> : <button onClick={login}>login</button>}</div>
	);
}
