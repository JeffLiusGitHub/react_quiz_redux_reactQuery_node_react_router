import { useState, lazy, Suspense } from 'react';
import React from 'react';
import UseRequest from './customHook/UseRequest';
import { useNavigate } from 'react-router-dom';
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
		<Container>
			<IconSection>
				<Suspense fallback={<div>Loading...</div>}>
					<LottieAnimation fileType={'login'} />
				</Suspense>
			</IconSection>
			<FormSection>
				<FormContainer>
					<Title>Sign In</Title>
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
					<Button onClick={onSubmit}>Sign In</Button> {error}
				</FormContainer>
			</FormSection>
		</Container>
	);
};

export default Signin;
