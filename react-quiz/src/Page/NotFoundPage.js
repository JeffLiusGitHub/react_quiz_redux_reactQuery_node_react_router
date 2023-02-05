import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { Container, ErrorMessage } from './NotFoundPageStyle';
const LottieAnimation = lazy(() => import('../components/LottieAnimation'));

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
