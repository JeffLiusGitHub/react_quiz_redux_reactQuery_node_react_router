import { useState } from 'react';
import React from 'react';
import UseRequest from './customHook/UseRequest';
import { useNavigate } from 'react-router-dom';
const Signin = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { doRequest, error } = UseRequest({
		url: '/api/users/signin',
		method: 'post',
		body: {
			email,
			password,
		},
		onSuccess: () => {
			navigate('/quiz/1');
		},
	});

	const onSubmit = async (event) => {
		event.preventDefault();
		await doRequest();
	};
	return (
		<form onSubmit={onSubmit}>
			<h1>Sign In</h1>
			<div className="form-group">
				<label>Email Address</label>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="form-control"
				/>
			</div>
			<div className="form-group">
				<label>Password</label>
				<input
					type="password"
					onChange={(e) => setPassword(e.target.value)}
					className="form-control"
				/>
			</div>
			{error}

			<button className="btn btn-primary">Sign In</button>
		</form>
	);
};

export default Signin;
