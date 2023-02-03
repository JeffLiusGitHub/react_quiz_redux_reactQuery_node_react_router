import React from 'react';
import { useReactQueryWithQuizTitle } from '../helpers/fetchApi';
import { Link } from 'react-router-dom';
const CheckAnswer = () => {
	const { title, loadingTitle, isError, error, success } =
		useReactQueryWithQuizTitle();
	if (loadingTitle) {
		// console.log('Loading...');
		return <div>Loading...</div>;
	}

	if (isError) {
		// console.log('Error: ', error.message);
		return <div>Error...</div>;
	}
	console.log(title);
	return (
		<div>
			<p>choose question you would like to modify</p>
			<ul>
				{title.map((title) => (
					<Link to={`/quiz/${parseInt(title.id)}`}>
						<li key={title.id}>{title.question}</li>
					</Link>
				))}
			</ul>
			<Link to={'/quiz/score'}>Finish</Link>
		</div>
	);
};

export default CheckAnswer;
