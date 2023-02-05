import React, { lazy, Suspense } from 'react';
import '../App.css';
import {
	useReactQueryWithFetchScore,
	deleteQuizData,
} from '../helpers/fetchApi';
import { useSelector } from 'react-redux';
import { EndScreenContainer, QuizFinishedTitle, Score } from './EndScreenStyle';
import { convertUserName } from '../helpers/NameConvert';
import CustomButton from '../components/CustomButton';
const LottieAnimation = lazy(() => import('../components/LottieAnimation'));

const EndScreen = () => {
	const { email } = useSelector((state) => state.user);

	const { title, loadingTitle, isError } = useReactQueryWithFetchScore();
	if (loadingTitle) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error...</div>;
	}

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
			<CustomButton
				toUrl={'/quiz/1'}
				buttonContent={'Restart Quiz'}
				onClick={restartQuizHandler}
			/>
		</EndScreenContainer>
	);
};

export default EndScreen;
