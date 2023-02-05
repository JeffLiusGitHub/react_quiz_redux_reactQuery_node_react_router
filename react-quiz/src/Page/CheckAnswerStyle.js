import styled from 'styled-components';

export const CheckContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 30px;
	background-color: #dfe1e2;
`;
export const Title = styled.h1`
	font-size: 48px;
`;

export const QuizList = styled.ul`
	list-style: none;
	padding: 0;
	height: 60%;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex-direction: column;
`;

export const QuizItem = styled.li`
	margin-bottom: 10px;
	font-size: 18px;
	font-weight: bold;
	font-size: 36px;
	text-decoration: none;
	color: black;
	text-shadow: 2px 2px 1px rgba(179, 190, 206, 0.33);
`;