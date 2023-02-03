import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import UseRequest from './customHook/UseRequest';
const Signup = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { doRequest, error } = UseRequest({
		url: '/api/users/signup',
		method: 'post',
		body: {
			email,
			password,
		},
		onSuccess: () => navigate('/auth/signin'),
	});

	const onSubmit = async (event) => {
		event.preventDefault();
		// doRequest();
		// Router.push('/');
		console.log(await doRequest());
	};
	return (
		<form onSubmit={onSubmit}>
			<h1>Sign Up</h1>
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

			<button className="btn btn-primary">Sign up</button>
		</form>
	);
};

export default Signup;
