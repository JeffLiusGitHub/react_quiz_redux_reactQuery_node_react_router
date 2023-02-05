import styled from 'styled-components';

export const Container = styled.div`
	content: '';
	background-image: url('./assets/background.png');
	background-color: 'red';
	background-size: 100% 100%;
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	/* -webkit-filter: blur(20px) grayscale(10%) opacity(80%) brightness(95%);
	filter: blur(14px) grayscale(10%) opacity(80%) brightness(95%) saturate(85%); */
	z-index: -1;
`;
