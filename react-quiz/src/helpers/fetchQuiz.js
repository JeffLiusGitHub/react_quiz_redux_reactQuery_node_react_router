import axios from 'axios';
import { QueryClient, useQuery } from '@tanstack/react-query';
const fetchQuiz = async ({ queryKey }) => {
	const [_, quizId] = queryKey;
	console.log(quizId);
	const response = await axios.get(`http://localhost:8080/${quizId}`);
	const products = response.data;
	return products;
};

export default function useReactQueryWithQuiz(quizId) {
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
}
