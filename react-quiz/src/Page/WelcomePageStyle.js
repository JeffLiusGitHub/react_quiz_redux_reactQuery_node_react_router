import styled from 'styled-components';
import background from '../assets/background.jpg';
import { mobile, laptop, tablet } from '../helpers/responsive';

export const BackgroundContainer = styled.div`
	background-image: url(${background});
	background-size: cover;
	backdrop-filter: blur(5px);
	height: 100vh;
	width: 100%;
	position: absolute;
	z-index: 1;
`;

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100vw;
	position: relative;
	z-index: 10;
	${mobile({ padding: '5px' })}
`;

export const SloganContainer = styled.div`
	font-family: Arial, sans-serif;
	font-size: 34px;
	text-align: center;
	color: white;
	text-shadow: 1px 3px 0 #969696, 10px 10px 4px rgba(19, 77, 102, 0.16);
`;
