import React, { PropsWithChildren, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

function AuthProvider({ children }: PropsWithChildren) {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

	function login() {
		setIsLoggedIn(true);
	}
	function logOut() {
		setIsLoggedIn(false);
	}
	return (
		<AuthContext.Provider
			value={{
				isLoggedIn,
				login,
				logOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
