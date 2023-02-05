import React from 'react';
import { useReactQueryWithQuizTitle } from '../helpers/fetchApi';
import { Link } from 'react-router-dom';
import CustomButton from '../components/CustomButton';
import { CheckContainer, Title, QuizList, QuizItem } from './CheckAnswerStyle';

const CheckAnswer = () => {
	const { title, loadingTitle, isError } = useReactQueryWithQuizTitle();
	if (loadingTitle) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error...</div>;
	}

	return (
		<CheckContainer>
			<Title>Choose a question you would like to modify</Title>
			<QuizList>
				{title.map((title) => (
					<Link
						key={title.id}
						to={`/quiz/${parseInt(title.id)}`}
						style={{ textDecoration: 'none' }}
					>
						<QuizItem key={title.id}>
							{title.id}. {title.question}
						</QuizItem>
					</Link>
				))}
			</QuizList>
			<CustomButton toUrl={'/quiz/score'} buttonContent={'Finish'} />
		</CheckContainer>
	);
};

export default CheckAnswer;
