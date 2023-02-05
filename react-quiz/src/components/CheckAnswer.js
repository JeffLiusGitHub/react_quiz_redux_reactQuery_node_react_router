import React from 'react';
import { useReactQueryWithQuizTitle } from '../helpers/fetchApi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@mui/material';
const CheckAnswer = () => {
	const { title, loadingTitle, isError, error, success } =
		useReactQueryWithQuizTitle();
	if (loadingTitle) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error...</div>;
	}

	const CheckContainer = styled.div`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 30px;
		background-color: #dfe1e2;
	`;
	const Title = styled.h1`
		font-size: 48px;
	`;

	const QuizList = styled.ul`
		list-style: none;
		padding: 0;
		height: 60%;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		flex-direction: column;
	`;

	const QuizItem = styled.li`
		margin-bottom: 10px;
		font-size: 18px;
		font-weight: bold;
		font-size: 36px;
		text-decoration: none;
		color: black;
		text-shadow: 2px 2px 1px rgba(179, 190, 206, 0.33);
	`;

	const FinishButton = styled(Link)`
		display: block;
		padding: 10px;
		background-color: lightblue;
		color: white;
		text-align: center;
		text-decoration: none;
		margin-top: 20px;
	`;

	return (
		<CheckContainer>
			<Title>Choose a question you would like to modify</Title>
			<QuizList>
				{title.map((title) => (
					<Link
						to={`/quiz/${parseInt(title.id)}`}
						style={{ textDecoration: 'none' }}
					>
						<QuizItem key={title.id}>
							{title.id}. {title.question}
						</QuizItem>
					</Link>
				))}
			</QuizList>
			<Button variant="contained">
				<Link
					to={'/quiz/score'}
					style={{
						padding: '5px',
						fontSize: '25px',
						color: 'white',
						textDecoration: 'none',
					}}
				>
					Finish
				</Link>
			</Button>
		</CheckContainer>
	);
};

export default CheckAnswer;
