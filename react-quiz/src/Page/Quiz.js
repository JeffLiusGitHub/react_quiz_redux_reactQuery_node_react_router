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
	NextButton,
} from './QuizStyle';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
const LottieAnimation = lazy(() => import('../components/LottieAnimation'));
function Quiz() {
	const [answerOption, setAnswerOption] = useState(null);
	const [optionSelected, setOptionSelected] = useState(false);
	const location = useLocation();
	const quizId = location.pathname.split('/')[2];

	const chooseOption = (option) => {
		setAnswerOption(option);
		setOptionSelected(true);
	};

	const { quiz, loadingQuiz, isError, error, success } =
		useReactQueryWithQuiz(quizId);
	if (loadingQuiz) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error...</div>;
	}

	const postAnswerHandler = () => {
		const options = ['A', 'B', 'C', 'D'];

		if (!options.includes(answerOption)) {
			alert('please select a chooice first');
			return;
		}
		postAnswer(quizId, answerOption);
		setOptionSelected(false);
		setAnswerOption(null);
	};

	//

	//

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
					<OptionButton
						data-selected={answerOption === 'A'}
						onClick={() => chooseOption('A')}
					>
						{quiz.A}
					</OptionButton>
					<OptionButton
						data-selected={answerOption === 'B'}
						onClick={() => chooseOption('B')}
					>
						{quiz.B}
					</OptionButton>
					<OptionButton
						data-selected={answerOption === 'C'}
						onClick={() => chooseOption('C')}
					>
						{quiz.C}
					</OptionButton>
					<OptionButton
						data-selected={answerOption === 'D'}
						onClick={() => chooseOption('D')}
					>
						{quiz.D}
					</OptionButton>
				</QuestionsContainer>

				{quiz.end ? (
					<Button
						variant="contained"
						onClick={postAnswerHandler}
						disabled={!optionSelected}
					>
						<Link
							to={'/quiz/check'}
							style={{
								padding: '5px',
								fontSize: '25px',
								color: 'white',
								textDecoration: 'none',
							}}
						>
							Check Answer
						</Link>
					</Button>
				) : (
					<Button
						variant="contained"
						onClick={postAnswerHandler}
						disabled={!optionSelected}
					>
						<Link
							to={`/quiz/${parseInt(quizId) + 1}`}
							style={{
								padding: '5px',
								fontSize: '25px',
								color: 'white',
								textDecoration: 'none',
							}}
						>
							Next Question
						</Link>
					</Button>
				)}
			</QuizContainer>
		</Container>
	);
}

export default Quiz;
