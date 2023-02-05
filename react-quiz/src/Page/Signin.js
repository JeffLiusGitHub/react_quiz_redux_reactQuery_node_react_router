import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormComponent from '../components/FormComponent';

const Signin = () => {
	const navigate = useNavigate();

	const onSuccess = () => {
		navigate('/quiz/1');
	};

	return (
		<FormComponent
			title={'Sign In'}
			animationType={'login'}
			fetchUrl={'/api/users/signin'}
			onSuccess={onSuccess}
		/>
	);
};

export default Signin;
