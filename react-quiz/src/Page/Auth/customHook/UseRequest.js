import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import {
	loginFailure,
	loginStart,
	loginSuccess,
} from '../../../Store/UserSlice';
import { useDispatch } from 'react-redux';
const UseRequest = ({ url, method, body, onSuccess }) => {
	const [error, setError] = useState(null);
	const dispatch = useDispatch();
	const BASEURL = 'http://localhost:8080';
	const doRequest = async () => {
		dispatch(loginStart());
		try {
			setError(null);
			const response = await axios[method](`${BASEURL}${url}`, {
				...body,
			});
			// console.log(response);
			dispatch(loginSuccess(response.data));
			if (onSuccess) {
				onSuccess(response.data);
			}
			return response.data;
		} catch (err) {
			dispatch(loginFailure());
			setError(
				<>
					{err?.response?.data?.errors?.length > 0 && (
						<div className="alert alert-danger">
							<h4>Ooops...</h4>
							<ul className="my-0">
								{err?.response?.data?.errors?.map((err) => (
									<li key={err.message}>{err.message}</li>
								))}
							</ul>
						</div>
					)}
				</>
			);
		}
	};
	return { doRequest, error };
};

export default UseRequest;
