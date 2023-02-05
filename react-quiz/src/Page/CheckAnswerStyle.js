import styled from 'styled-components';
import { mobile, tablet, laptop } from '../helpers/responsive';
// ${tablet({ fontSize: '40px', flexDirection: 'column-reverse' })}
export const CheckContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 30px;
	background-color: #dfe1e2;
	${tablet({ padding: '0px 15px' })}
`;
export const Title = styled.h1`
	font-size: 48px;
	${tablet({ FontSize: '36px' })}
	${mobile({
		fontSize: '24px',
	})}
`;

export const QuizList = styled.ul`
	list-style: none;
	padding: 0;
	height: 60%;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex-direction: column;
	margin-bottom: 20px;
`;

export const QuizItem = styled.li`
	margin-bottom: 20px;
	font-size: 18px;
	font-weight: bold;
	font-size: 36px;
	text-decoration: none;
	color: black;
	text-shadow: 2px 2px 1px rgba(179, 190, 206, 0.33);
	${tablet({
		fontSize: '24px',
	})}
	${mobile({
		fontSize: '12px',
	})} /* ${tablet({
		marginBottom: '35px',
		FontSize: '4px',
	})} */
`;
