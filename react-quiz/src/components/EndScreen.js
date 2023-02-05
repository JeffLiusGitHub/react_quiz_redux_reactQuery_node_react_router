import React, { lazy, Suspense } from 'react';
import '../App.css';
import { useContext } from 'react';
import { GameStateContext } from '../helpers/Contexts';
import { Questions } from '../helpers/Questions';
import { Link } from 'react-router-dom';
import {
	useReactQueryWithFetchScore,
	deleteQuizData,
} from '../helpers/fetchApi';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { convertUserName } from '../helpers/NameConvert';

const LottieAnimation = lazy(() => import('../components/LottieAnimation'));
const EndScreen = () => {
	const { email } = useSelector((state) => state.user);
	// const { score, setScore, setGameState, userName } = useContext(
	//   GameStateContext
	// );

	// const restartQuiz = () => {
	//   setScore(0);
	//   setGameState("menu");
	// };

	const { title, loadingTitle, isError, error, success } =
		useReactQueryWithFetchScore();
	if (loadingTitle) {
		// console.log('Loading...');
		return <div>Loading...</div>;
	}

	if (isError) {
		// console.log('Error: ', error.message);
		return <div>Error...</div>;
	}
	console.log({ title });

	const EndScreenContainer = styled.div`
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		background-color: #dfe1e2;
	`;

	const QuizFinishedTitle = styled.h1`
		font-size: 36px;
		margin-bottom: 20px;
	`;

	const Score = styled.h1`
		font-size: 24px;
		margin-bottom: 20px;
	`;

	const RestartButton = styled(Link)`
		display: inline-block;
		padding: 10px 20px;
		background-color: lightblue;
		color: white;
		text-decoration: none;
		border-radius: 5px;
		margin-top: 20px;
	`;

	const restartQuizHandler = () => {
		deleteQuizData();
	};
	return (
		<EndScreenContainer>
			<Suspense fallback={<div>Loading...</div>}>
				<LottieAnimation fileType={'congratulations'} />
			</Suspense>
			<QuizFinishedTitle>Quiz Finished</QuizFinishedTitle>
			<QuizFinishedTitle>
				Congratulations {convertUserName(email)}!
			</QuizFinishedTitle>
			<Score>
				You've got {title.score} out of {title.total}
			</Score>
			<RestartButton to={'/quiz/1'} onClick={restartQuizHandler}>
				Restart Quiz
			</RestartButton>
		</EndScreenContainer>
	);
};

export default EndScreen;
