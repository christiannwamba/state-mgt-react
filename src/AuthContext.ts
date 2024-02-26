import { createContext } from "react";

export const AuthContext = createContext<{
	isLoggedIn: boolean;
	login(): void;
	logOut(): void;
}>({
	isLoggedIn: false,
	login() {},
	logOut() {},
});
