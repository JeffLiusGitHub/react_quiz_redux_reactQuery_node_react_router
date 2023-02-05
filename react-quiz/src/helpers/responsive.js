import { css } from 'styled-components';

export const mobile = (props) => {
	return css`
		@media only screen and (max-width: 380px) {
			${props}
		}
	`;
};
export const tablet = (props) => {
	return css`
		@media only screen and (max-width: 600px) {
			${props}
		}
	`;
};

export const laptop = (props) => {
	return css`
		@media only screen and (max-width: 1600px) {
			${props}
		}
	`;
};
