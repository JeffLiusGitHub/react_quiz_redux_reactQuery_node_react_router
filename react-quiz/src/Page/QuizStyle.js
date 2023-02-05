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

	background: #dfe1e2;
`;

export const QuizHeader = styled.h1`
	font-size: 48px;
	font-weight: bold;
	margin-bottom: 16px;
	width: 80%;
`;

export const QuestionsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	width: 80%;
	height: 60%;
`;

export const OptionButton = styled.button`
	background-color: #fff;
	border: 1px solid #000;
	border-radius: 4px;
	padding: 8px 16px;
	margin-bottom: 8px;
	font-size: 36px;
	width: 80%;
	height: 15%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;

	&:hover {
		background-color: #b8d0f9;
		color: #fff;
		cursor: pointer;
	}
	&[data-selected='true'] {
		background-color: #7494fc;
		color: #fff;
	}
`;

export const NextButton = styled(Link)`
	/* display: inline-block; */
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
