import styled from 'styled-components';
import { mobile, laptop, tablet } from '../helpers/responsive';

export const EndScreenContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
	background-color: #dfe1e2;
`;

export const QuizFinishedTitle = styled.h1`
	font-size: 36px;
	margin-bottom: 20px;
	${mobile({ fontSize: '24px', marginButton: '15px' })}
`;

export const Score = styled.h1`
	font-size: 24px;
	margin-bottom: 20px;
	${mobile({ fontSize: '12px', marginButton: '10px' })}
`;
