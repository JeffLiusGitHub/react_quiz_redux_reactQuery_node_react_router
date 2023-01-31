import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Trivia from './Trivia';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectQuestion, answerQuestion } from '../Store/quizSlice';
const data = [
	{
		id: 1,
		question: 'Rolex is a company that specializes in what type of product?',
		answers: [
			{
				text: 'Phone',
				correct: false,
			},
			{
				text: 'Watches',
				correct: true,
			},
			{
				text: 'Food',
				correct: false,
			},
			{
				text: 'Cosmetic',
				correct: false,
			},
		],
	},
	{
		id: 2,
		question: 'When did the website `Facebook` launch?',
		answers: [
			{
				text: '2004',
				correct: true,
			},
			{
				text: '2005',
				correct: false,
			},
			{
				text: '2006',
				correct: false,
			},
			{
				text: '2007',
				correct: false,
			},
		],
	},
	{
		id: 3,
		question: 'Who played the character of harry potter in movie?',
		answers: [
			{
				text: 'Johnny Deep',
				correct: false,
			},
			{
				text: 'Leonardo Di Caprio',
				correct: false,
			},
			{
				text: 'Denzel Washington',
				correct: false,
			},
			{
				text: 'Daniel Red Cliff',
				correct: true,
			},
		],
	},
];
const QuestionPage = () => {
	const [questionNumber, setQuestionNumber] = useState(1);

	// const [questions, setQuestions] = useState([]);
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const response = await axios.get('http://localhost:8080');
	// 		setQuestions(response.data.questions);
	// 	};
	// 	try {
	// 		fetchData();
	// 	} catch (err) {
	// 		console.error();
	// 	}
	// // }, []);
	// console.log(questions);
	// const question = useSelector(selectQuestion);
	// const [selectedOption, setSelectedOption] = useState(null);
	// const dispatch = useDispatch();

	// const handleOptionSelection = (option) => {
	// 	setSelectedOption(option);
	// };

	// const handleSubmit = () => {
	// 	dispatch(
	// 		answerQuestion({
	// 			questionId: question.id,
	// 			option: selectedOption,
	// 		})
	// 	);
	// };

	return (
		<div className="app">
			<>
				<div className="main">
					<>
						<div className="top"></div>
						<div className="bottom">
							<Trivia
								data={data}
								questionNumber={questionNumber}
								setQuestionNumber={setQuestionNumber}
							/>
						</div>
					</>
				</div>
			</>
		</div>
	);
};

export default QuestionPage;
