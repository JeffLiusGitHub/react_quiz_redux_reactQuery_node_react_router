import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		isLogin: false,
		isAdmin: false,
		currentUser: null,
		JWT: null,
		isFetching: false,
		error: false,
		_id: null,
	},
	reducers: {
		loginStart: (state) => {
			state.isFetching = true;
			state.isLogin = false;
		},
		loginSuccess: (state, action) => {
			state.isFetching = false;
			state.error = false;
			state.currentUser = action.payload.userName;
			state.JWT = action.payload.jwtToken;
			state._id = action.payload._id;
			state.isAdmin = action.payload.isAdmin;
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
			state._id = null;
			state.isLogin = false;
			state.isAdmin = false;
		},
	},
});

export const { loginStart, loginSuccess, loginFailure, logOut } =
	userSlice.actions;
export default userSlice.reducer;