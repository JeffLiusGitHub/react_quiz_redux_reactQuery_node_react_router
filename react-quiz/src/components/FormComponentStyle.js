import styled from 'styled-components';
import { mobile, laptop, tablet } from '../helpers/responsive';

export const Container = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const IconSection = styled.div`
	width: 30%;
	height: 100%;
	background-color: rgba(61, 61, 237, 0.249);
	/* background-color: linear-gradient(160deg, #5e7ef9 15%, #ffa2ba 70%); */
	display: flex;
	justify-content: center;
	align-items: center;
	${laptop({ display: 'none' })};
`;

export const FormSection = styled.div`
	width: 70%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: linear-gradient(160deg, #5e7ef9 15%, #ffa2ba 70%) !important;

	${laptop({ width: '100%' })};
`;
export const FormBackground = styled.div`
	position: absolute;
	max-width: unset;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: linear-gradient(160deg, #5e7ef9 15%, #ffa2ba 70%) !important;
	filter: blur(150px);
	transform: skewY(-20deg) translateY(0) translateZ(0);
	z-index: -100;
`;
export const FormContainer = styled.form`
	width: 50%;
	height: 60%;
	background-color: #f2f2fd;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	box-shadow: 24px 24px 24px 24px rgba(0, 0, 0, 0.24);
	border-radius: 10px;
	min-height: 400px;
	${laptop({ width: '60%' })};
	${tablet({ width: '70%' })};
	${mobile({ width: '90%' })};
`;

export const Form = styled.form`
	width: 50%;
	min-width: 530px;
	height: 60%;
	min-height: 600px;
	box-shadow: 24px 24px 24px 24px rgba(0, 0, 0, 0.24);
	background-color: white;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	${mobile({ padding: '20px' })};
`;

export const Title = styled.h1`
	font-size: 36px;
	margin-bottom: 60px;
`;

export const Input = styled.input`
	background-color: #56baed;
	border: none;
	color: white;
	padding: 15px 10px;
	width: 400px;
	height: 40px;
	text-decoration: none;
	display: inline-block;
	font-size: 24px;
	-webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
	box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
	-webkit-border-radius: 5px 5px 5px 5px;
	border-radius: 5px 5px 5px 5px;
	margin: 5px 20px 40px 20px;
	-webkit-transition: all 0.3s ease-in-out;
	-moz-transition: all 0.3s ease-in-out;
	-ms-transition: all 0.3s ease-in-out;
	-o-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
	${laptop({ width: '80%' })};
`;

export const Button = styled.button`
	margin-top: 50px;
	padding: 10px 20px;
	background-color: green;
	color: white;
	border-radius: 5px;
	border: none;
	font-size: 24px;
	cursor: pointer;
	transition: 0.3s ease-in-out;
	background-color: #56baed;
	border: none;
	color: white;
	padding: 15px 80px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	text-transform: uppercase;
	font-size: 13px;
	-webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
	box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
	-webkit-border-radius: 5px 5px 5px 5px;
	border-radius: 5px 5px 5px 5px;
	margin: 5px 20px 40px 20px;
	-webkit-transition: all 0.3s ease-in-out;
	-moz-transition: all 0.3s ease-in-out;
	-ms-transition: all 0.3s ease-in-out;
	-o-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
	&:hover {
		background-color: lightblue;
	}
`;
