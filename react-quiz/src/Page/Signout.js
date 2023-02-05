// import Router from 'next/router';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UseRequest from './customHook/UseRequest';
const Signout = () => {
	const navigate = useNavigate();
	const { doRequest } = UseRequest({
		url: '/api/users/signout',
		method: 'post',
		body: {},
		onSuccess: () => {
			const nav = () => {
				navigate('/auth/signin');
			};
			setTimeout(nav, 1500);
		},
	});

	useEffect(() => {
		doRequest();
	}, []);
	return <div>signing you out...</div>;
};

export default Signout;
