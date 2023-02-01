import './App.css';
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import { Route, Routes, Navigate } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import { useState } from 'react';
import useReactQueryWithQuiz from './helpers/fetchQuiz';
// ['menu', 'playing', 'finished']
function App() {
	// const [gameState, setGameState] = useState('menu');
	// const [userName, setUserName] = useState('');
	// const [score, setScore] = useState(0);

	return (
		<ErrorBoundary>
			<div className="App">
				<h1>Quiz App</h1>
				<Routes>
					<Route path="/" element={<Menu />} />
					<Route path="/quiz/:quizId" element={<Quiz />} />
					<Route path="/finish" element={<EndScreen />} />
				</Routes>
			</div>
		</ErrorBoundary>
	);
}

export default App;
