import React from 'react';
import {
	BackgroundContainer,
	ContentContainer,
	SloganContainer,
} from './WelcomePageStyle';
import CustomButton from '../components/CustomButton';

const WelcomePage = () => {
	return (
		<>
			<BackgroundContainer />
			<ContentContainer>
				<SloganContainer>
					<h1>Greetings!</h1>
					<h3>
						Are you ready to log in and explore the amazing world of
						mathematics?
					</h3>
					<h3>Let's log in and begin!</h3>
				</SloganContainer>
				<CustomButton
					toUrl={'auth/signin'}
					buttonContent={'SIGN IN'}
					style={{ fontSize: '100px' }}
				/>
			</ContentContainer>
		</>
	);
};

export default WelcomePage;
