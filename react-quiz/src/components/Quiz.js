import '../App.css';
import { Questions } from '../helpers/Questions';
import { useState } from 'react';
import useReactQueryWithQuiz from '../helpers/fetchQuiz';
import { useContext } from 'react';
import { GameStateContext } from '../helpers/Contexts';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Quiz() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [optionChosen, setOptionChosen] = useState('');

	const location = useLocation();
	const quizId = location.pathname.split('/')[2];

	const { score, setScore, gameState, setGameState } =
		useContext(GameStateContext);

	const chooseOption = (option) => {
		setOptionChosen(option);
	};

	const nextQuestion = () => {
		if (Questions[currentQuestion].asnwer === optionChosen) {
			setScore(score + 1);
		}
		setCurrentQuestion(currentQuestion + 1);
	};

	const finishQuiz = () => {
		if (Questions[currentQuestion].asnwer === optionChosen) {
			setScore(score + 1);
		}
		setGameState('finished');
	};

	const { quiz, loadingQuiz, isError, error, success } =
		useReactQueryWithQuiz(quizId);
	if (loadingQuiz) {
		// console.log('Loading...');
		return <div>Loading...</div>;
	}

	if (isError) {
		// console.log('Error: ', error.message);
		return <div>Error...</div>;
	}
	console.log(quiz);
	// console.log(loadingQuiz);

	return (
		<div className="Quiz">
			<h1>{quiz.question}</h1>
			<div className="questions">
				<button
					onClick={() => {
						chooseOption('A');
					}}
				>
					{quiz.A}
				</button>
				<button
					onClick={() => {
						chooseOption('B');
					}}
				>
					{quiz.B}
				</button>
				<button
					onClick={() => {
						chooseOption('B');
					}}
				>
					{quiz.C}
				</button>
				<button
					onClick={() => {
						chooseOption('D');
					}}
				>
					{quiz.D}
				</button>
			</div>

			{quiz.end ? (
				<Link to={'/finish'}>Finish Quiz</Link>
			) : (
				<Link to={`/quiz/${parseInt(quizId) + 1}`}>Next Question</Link>
			)}
		</div>
	);
}

export default Quiz;
