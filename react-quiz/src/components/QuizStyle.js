import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`;
export const IconContainer = styled.div`
	width: 30%;
	height: 100vh;
	background-color: rgba(61, 61, 237, 0.249);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const QuizContainer = styled.div`
	text-align: center;
	margin-top: 30px;
	width: 70%;
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	display: flex;

	background: radial-gradient(
		circle,
		rgba(207, 207, 251, 1) 0%,
		rgba(148, 187, 233, 1) 100%
	);
`;

export const QuizHeader = styled.h1`
	font-size: 32px;
	font-weight: bold;
	margin-bottom: 16px;
`;

export const QuestionsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const OptionButton = styled.button`
	background-color: #fff;
	border: 1px solid #000;
	border-radius: 4px;
	padding: 8px 16px;
	margin-bottom: 8px;
	font-size: 16px;

	&:hover {
		background-color: #000;
		color: #fff;
		cursor: pointer;
	}
	&[data-selected='true'] {
		background-color: #19c56d;
		color: #fff;
	}
`;

export const NextButton = styled(Link)`
	display: inline-block;
	background-color: #000;
	color: #fff;
	border-radius: 4px;
	padding: 8px 16px;
	text-decoration: none;
	font-size: 16px;

	&:hover {
		background-color: #fff;
		color: #000;
		cursor: pointer;
	}
`;
