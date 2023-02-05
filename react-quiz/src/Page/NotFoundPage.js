import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { Button } from './WelcomePage';
import { Button } from '@mui/material';
const LottieAnimation = lazy(() => import('../components/LottieAnimation'));

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background-color: rgba(61, 61, 237, 0.249);
`;

const ErrorMessage = styled.h1`
	font-size: 2rem;
`;

const ReturnLink = styled(Link)`
	font-size: 1.2rem;
	color: blue;
	margin-top: 1rem;
`;

const NotFound = () => {
	return (
		<Container>
			<Suspense fallback={<div>Loading...</div>}>
				<div style={{ width: '20%' }}>
					<LottieAnimation fileType={'noResult'} />
				</div>
			</Suspense>
			<ErrorMessage>404 Not Found</ErrorMessage>
			<Button variant="contained">
				<Link
					to={'/'}
					style={{
						padding: '5px',
						fontSize: '25px',
						color: 'white',
						textDecoration: 'none',
					}}
				>
					Back Home
				</Link>
			</Button>
		</Container>
	);
};

export default NotFound;
