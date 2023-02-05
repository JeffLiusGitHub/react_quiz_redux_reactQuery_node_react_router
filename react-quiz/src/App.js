import './App.css';
import LayoutComponent from './components/LayoutComponent';
import Menu from './components/Menu';
import Quiz from './Page/Quiz';
import EndScreen from './components/EndScreen';
import { Route, Routes } from 'react-router-dom';
import Signin from './Page/Signin';
import Signup from './Page/Signup';
import Signout from './Page/Signout';
import CheckAnswer from './components/CheckAnswer';
// import welcome from './Page/WelcomePage';
// import notFound from './Page/'
import WelcomePage from './Page/WelcomePage';
import NotFoundPage from './Page/NotFoundPage';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import { useSelector } from 'react-redux';
import { Container } from './AppStyle';
// ['menu', 'playing', 'finished']
function App() {
	const { email } = useSelector((state) => state.user);

	return (
		<ErrorBoundary>
			<Container>
				<LayoutComponent>
					<Routes>
						<Route path="/" element={<WelcomePage />} />
						{email && <Route path="/quiz/:quizId" element={<Quiz />} />}
						{/* {<Route path="/quiz/:quizId" element={<Quiz />} />} */}
						<Route path="quiz/check" element={<CheckAnswer />} />
						<Route path="quiz/score" element={<EndScreen />} />
						<Route path="/auth/signin" element={<Signin />} />
						<Route path="/auth/signup" element={<Signup />} />
						<Route path="/auth/signout" element={<Signout />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</LayoutComponent>
			</Container>
		</ErrorBoundary>
	);
}

export default App;
