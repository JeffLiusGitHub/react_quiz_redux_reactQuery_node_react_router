import '../App.css';
import { useState } from 'react';
import { useReactQueryWithQuiz, postAnswer } from '../helpers/fetchApi';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
	};

	return (
		<div className="Quiz">
			<h1>
				{quiz.id}: {quiz.question}
			</h1>
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
				<Link to={'/quiz/check'}>
					<button onClick={postAnswerHandler}>Check Answer</button>
				</Link>
			) : (
				<Link to={`/quiz/${parseInt(quizId) + 1}`}>
					<button onClick={postAnswerHandler} disabled={!optionSelected}>
						Next Question
					</button>
				</Link>
			)}
		</div>
	);
}

export default Quiz;
