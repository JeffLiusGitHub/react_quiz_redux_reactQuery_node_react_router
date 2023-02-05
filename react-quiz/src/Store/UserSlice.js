import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		isLogin: false,
		currentUser: null,
		JWT: null,
		error: false,
		email: null,
	},
	reducers: {
		loginStart: (state) => {
			state.isFetching = true;
			state.isLogin = false;
		},
		loginSuccess: (state, action) => {
			state.isFetching = false;
			state.error = false;
			state.email = action.payload.email;
			state.isLogin = true;
		},
		loginFailure: (state) => {
			state.isFetching = false;
			state.error = true;
			state.isLogin = false;
		},
		logOut: (state) => {
			state.currentUser = null;
			state.JWT = null;
			state.isLogin = false;
		},
	},
});

export const { loginStart, loginSuccess, loginFailure, logOut } =
	userSlice.actions;
export default userSlice.reducer;
