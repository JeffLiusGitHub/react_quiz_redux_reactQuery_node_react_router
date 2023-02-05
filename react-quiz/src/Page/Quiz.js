import '../App.css';
import { useState, lazy, Suspense } from 'react';
import { useReactQueryWithQuiz, postAnswer } from '../helpers/fetchApi';
import { useLocation } from 'react-router-dom';
import {
	Container,
	IconContainer,
	QuizContainer,
	QuizHeader,
	QuestionsContainer,
	OptionButton,
} from './QuizStyle';
import CustomButton from '../components/CustomButton';
const LottieAnimation = lazy(() => import('../components/LottieAnimation'));

const options = ['A', 'B', 'C', 'D'];
function Quiz() {
	const [answerOption, setAnswerOption] = useState(null);
	const [optionSelected, setOptionSelected] = useState(false);
	const location = useLocation();
	const quizId = location.pathname.split('/')[2];

	const chooseOption = (option) => {
		setAnswerOption(option);
		setOptionSelected(true);
	};

	const { quiz, loadingQuiz, isError } = useReactQueryWithQuiz(quizId);
	if (loadingQuiz) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error...</div>;
	}

	const postAnswerHandler = () => {
		postAnswer(quizId, answerOption);
		setOptionSelected(false);
		setAnswerOption(null);
	};

	return (
		<Container>
			<IconContainer>
				<Suspense fallback={<div>Loading...</div>}>
					<LottieAnimation fileType={'checklist'} />
				</Suspense>
			</IconContainer>
			<QuizContainer>
				<QuizHeader>
					{quiz.id}: {quiz.question}
				</QuizHeader>
				<QuestionsContainer>
					{options.map((option) => (
						<OptionButton
							key={option}
							data-selected={answerOption === option}
							onClick={() => chooseOption(option)}
						>
							{quiz[option]}
						</OptionButton>
					))}
				</QuestionsContainer>
				{quiz.end ? (
					<CustomButton
						toUrl={'/quiz/check'}
						buttonContent={'Check Answer'}
						onClick={postAnswerHandler}
						disabled={!optionSelected}
					/>
				) : (
					<CustomButton
						toUrl={`/quiz/${parseInt(quizId) + 1}`}
						buttonContent={'Next Question'}
						onClick={postAnswerHandler}
						disabled={!optionSelected}
					/>
				)}
			</QuizContainer>
		</Container>
	);
}

export default Quiz;
