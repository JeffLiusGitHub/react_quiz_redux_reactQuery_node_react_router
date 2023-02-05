import React from 'react';
import Header from './Header';
import { LayoutContainer } from './LayoutComponentStyle.js';
const LayoutComponent = ({ children }) => {
	return (
		<LayoutContainer>
			<Header />
			{children}
		</LayoutContainer>
	);
};

export default LayoutComponent;
