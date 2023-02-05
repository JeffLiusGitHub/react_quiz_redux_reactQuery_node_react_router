import React from 'react';
import styled from 'styled-components';
import background from '../assets/background.jpg';
// import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

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
const Button = styled(Link)`
	margin: 20px;
	width: 130px;
	height: 40px;
	color: #fff;
	text-decoration: none;
	text-align: center;
	border-radius: 5px;
	padding: 10px 25px;
	font-family: 'Lato', sans-serif;
	font-weight: 500;
	background: transparent;
	cursor: pointer;
	transition: all 0.3s ease;
	position: relative;
	display: inline-block;
	box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
		7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
	outline: none;
	background: rgb(96, 9, 240);
	background: linear-gradient(
		0deg,
		rgba(96, 9, 240, 1) 0%,
		rgba(129, 5, 240, 1) 100%
	);
	border: none;
	:before {
		height: 0%;
		width: 2px;
	}
	:hover {
		box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5),
			-4px -4px 6px 0 rgba(116, 125, 136, 0.5),
			inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
			inset 4px 4px 6px 0 rgba(0, 0, 0, 0.4);
	}
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
				<Button
					to={'auth/signin'}
					variant="contained"
					style={{ fontSize: '25px', marginTop: '10px' }}
				>
					SIGN IN
				</Button>
			</ContentContainer>
		</>
	);
};

export default WelcomePage;
