import axios from 'axios';
import {  loginFailure, logOut } from '../../Store/UserSlice';
import { useDispatch } from 'react-redux';
const UseRequest = ({ url, method, body, onSuccess }) => {
	const dispatch = useDispatch();
	const BASEURL = 'http://localhost:8080';
	const doRequest = async () => {
		try {
			const response = await axios[method](`${BASEURL}${url}`, {
				...body,
			});
			dispatch(logOut());
			if (onSuccess) {
				onSuccess(response.data);
			}
			return response.data;
		} catch (err) {
			dispatch(loginFailure());
		}
	};
	return { doRequest };
};

export default UseRequest;
