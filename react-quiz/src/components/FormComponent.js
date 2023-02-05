import { useState, lazy, Suspense } from 'react';
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
} from './FormComponentStyle';
const LottieAnimation = lazy(() => import('../components/LottieAnimation'));

const FormComponent = ({ title, animationType, fetchUrl, onSuccess }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { doRequest, error } = UseRequest({
		url: fetchUrl,
		method: 'post',
		body: {
			email,
			password,
		},
		onSuccess: onSuccess,
	});

	const onSubmit = async (event) => {
		event.preventDefault();
		await doRequest();
	};
	return (
		<Container>
			<IconSection>
				<Suspense fallback={<div>Loading...</div>}>
					<LottieAnimation fileType={animationType} />
				</Suspense>
			</IconSection>
			<FormSection>
				<FormContainer>
					<Title>{title}</Title>
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
							value={password}
							type="password"
							autoComplete="current_password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<Button onClick={onSubmit}>{title.toUpperCase()}</Button>
					{error}
				</FormContainer>
			</FormSection>
		</Container>
	);
};

export default FormComponent;
