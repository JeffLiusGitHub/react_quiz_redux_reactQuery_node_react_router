import './App.css';
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import { Route, Routes } from 'react-router-dom';
import Signin from './Page/Auth/Signin';
import Signup from './Page/Auth/Signup';
import Signout from './Page/Auth/Signout';
import CheckAnswer from './components/CheckAnswer';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Header from './components/Header';
import { useSelector } from 'react-redux';
// ['menu', 'playing', 'finished']
function App() {
	const { email } = useSelector((state) => state.user);

	return (
		<ErrorBoundary>
			<div className="App">
				<Header currentUser={email} />
				<h1>Quiz App</h1>
				<Routes>
					<Route path="/" element={<Menu />} />
					{email && <Route path="/quiz/:quizId" element={<Quiz />} />}
					<Route path="quiz/check" element={<CheckAnswer />} />
					<Route path="quiz/score" element={<EndScreen />} />
					<Route path="/auth/signin" element={<Signin />} />
					<Route path="/auth/signup" element={<Signup />} />
					<Route path="/auth/signout" element={<Signout />} />
					<Route path="*" element={<p>404 not found</p>} />
				</Routes>
			</div>
		</ErrorBoundary>
	);
}

export default App;
