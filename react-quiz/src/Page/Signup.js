import { useNavigate } from 'react-router-dom';
import React from 'react';
import FormComponent from '../components/FormComponent';
const Signup = () => {
	const navigate = useNavigate();

	const onSuccess = () => {
		navigate('/auth/signin');
	};

	return (
		<FormComponent
			title={'Sign Up'}
			animationType={'signup'}
			fetchUrl={'/api/users/signup'}
			onSuccess={onSuccess}
		/>
	);
};

export default Signup;
