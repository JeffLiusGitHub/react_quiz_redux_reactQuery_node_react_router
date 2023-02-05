import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UseLogout from './customHook/UseLogout';
import styled from 'styled-components';
import LottieAnimation from '../components/LottieAnimation';
const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-color: #dfe1e2;
	width: 100vw;
	height: 100%;
`;

const Signout = () => {
	const navigate = useNavigate();
	const { doRequest } = UseLogout({
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
	}, [doRequest]);
	return (
		<Container>
			<LottieAnimation fileType={'signout'} />
			<h1>system is signing you out...</h1>
		</Container>
	);
};

export default Signout;
