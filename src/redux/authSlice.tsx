import { createAction, createReducer } from "@reduxjs/toolkit";

const authInitialState = {
	isLoggedIn: false,
};

const loginAction = createAction("[Auth] Login");
const logoutAction = createAction("[Auth] Logout");

export const authReducer = createReducer(authInitialState, (builder) => {
	builder.addCase(loginAction, (state) => {
		state.isLoggedIn = true;
	});
	builder.addCase(logoutAction, (state) => {
		state.isLoggedIn = false;
	});
});

export const authActions = {
	loginAction,
	logoutAction,
};
