import React from 'react';
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

	const restartQuizHandler = () => {
		deleteQuizData();
	};
	return (
		<div className="EndScreen">
			<h1>Quiz Finished</h1>
			<h1>Congratulation!</h1>
			<h1>
				You've got {title.score} out of {title.total}
			</h1>
			{/* <h3>{userName}</h3>
			<h1>
				{score} / {Questions.length}
			</h1> */}
      	<Link to={'/quiz/1'}>
			<button onClick={restartQuizHandler}>Restart Quiz</button></Link>
		</div>
	);
};

export default EndScreen;
