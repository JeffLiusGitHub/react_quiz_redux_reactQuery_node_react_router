import '../App.css';
import { Questions } from '../helpers/Questions';
import { useState } from 'react';
import useReactQueryWithQuiz from '../helpers/fetchQuiz';
import { useContext } from 'react';
import { GameStateContext } from '../helpers/Contexts';

function Quiz() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [optionChosen, setOptionChosen] = useState('');

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
		useReactQueryWithQuiz(1);
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
			<h1>{Questions[currentQuestion].prompt}</h1>
			<div className="questions">
				<button
					onClick={() => {
						chooseOption('A');
					}}
				>
					{Questions[currentQuestion].A}
				</button>
				<button
					onClick={() => {
						chooseOption('B');
					}}
				>
					{Questions[currentQuestion].B}
				</button>
				<button
					onClick={() => {
						chooseOption('B');
					}}
				>
					{Questions[currentQuestion].B}
				</button>
				<button
					onClick={() => {
						chooseOption('D');
					}}
				>
					{Questions[currentQuestion].D}
				</button>
			</div>

			{currentQuestion === Questions.length - 1 ? (
				<button onClick={finishQuiz} id="nextQuestion">
					Finish Quiz
				</button>
			) : (
				<button onClick={nextQuestion} id="nextQuestion">
					Next Question
				</button>
			)}
		</div>
	);
}

export default Quiz;
