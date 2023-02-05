import { useState, lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import UseRequest from './customHook/UseRequest';
import {
	Container,
	IconSection,
	FormSection,
	FormContainer,
	Title,
	Input,
	Button,
} from './SigninStyle';
const LottieAnimation = lazy(() => import('../components/LottieAnimation'));
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
		<Container>
			<IconSection>
				<Suspense fallback={<div>Loading...</div>}>
					<div style={{ width: '80%' }}>
						<LottieAnimation fileType={'signup'} />
					</div>
				</Suspense>
			</IconSection>
			<FormSection>
				<FormContainer>
					<Title>Sign Up</Title>
					<div>
						<Input
							value={email}
							type="email"
							onChange={(e) => setEmail(e.target.value)}
							placeholder="email address"
						/>
					</div>
					<div>
						<Input
							type="password"
							autoComplete="current_password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<Button onClick={onSubmit}>Sign up</Button> {error}
				</FormContainer>
			</FormSection>
		</Container>
	);
};

export default Signup;
