import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const BASE_URL = 'http://localhost:8080';

const fetchQuiz = async ({ queryKey }) => {
	const [, quizId] = queryKey;
	const response = await axios.get(`${BASE_URL}/quiz/${quizId}`);
	const products = response.data;
	return products;
};

const fetchQuizTitle = async () => {
	const response = await axios.get(`${BASE_URL}/quiz/title`);
	const title = response.data;
	return title;
};

export const postAnswer = async (quizId, answerOption) => {
	const response = await axios.post(
		`${BASE_URL}/answer/${quizId}/${answerOption}`
	);
	const answer = response.data;
	return answer;
};

export const deleteQuizData = async () => {
	const response = await axios.delete(`${BASE_URL}/answer/restart`);
	const message = response.data;
	return message;
};

const fetchScore = async () => {
	const response = await axios.get(`${BASE_URL}/answer/getscore`);
	const score = response.data;
	return score;
};

export const useReactQueryWithQuiz = (quizId) => {
	const { isError, isSuccess, isLoading, data, error } = useQuery(
		['quizId', quizId],
		fetchQuiz
	);

	return {
		quiz: data,
		loadingQuiz: isLoading,
		isError,
		error,
		success: isSuccess,
	};
};

export const useReactQueryWithQuizTitle = () => {
	const { isError, isSuccess, isLoading, data, error } = useQuery(
		['title'],
		fetchQuizTitle
	);

	return {
		title: data,
		loadingTitle: isLoading,
		isError,
		error,
		success: isSuccess,
	};
};

export const useReactQueryWithFetchScore = () => {
	const { isError, isSuccess, isLoading, data, error } = useQuery(
		['score'],
		fetchScore
	);

	return {
		title: data,
		loadingTitle: isLoading,
		isError,
		error,
		success: isSuccess,
	};
};
