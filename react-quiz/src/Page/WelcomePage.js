import React from 'react';
import styled from 'styled-components';
import background from '../assets/background.jpg';
import CustomButton from '../components/CustomButton';

const BackgroundContainer = styled.div`
	background-image: url(${background});
	background-size: cover;
	backdrop-filter: blur(5px);
	height: 100vh;
	width: 100%;
	position: absolute;
	z-index: 1;
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100%;
	position: relative;
	z-index: 10;
`;

const SloganContainer = styled.div`
	font-family: Arial, sans-serif;
	font-size: 34px;
	text-align: center;
	color: white;
	text-shadow: 1px 3px 0 #969696, 10px 10px 4px rgba(19, 77, 102, 0.16);
`;

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
				<CustomButton toUrl={'auth/signin'} buttonContent={'SIGN IN'} />
			</ContentContainer>
		</>
	);
};

export default WelcomePage;
