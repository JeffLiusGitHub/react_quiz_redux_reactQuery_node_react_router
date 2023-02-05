import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
const CustomButton = ({ toUrl, buttonContent, ...otherProps }) => {
	return (
		<Button variant="contained" {...otherProps}>
			<Link
				to={toUrl}
				style={{
					padding: '5px',
					fontSize: '25px',
					color: 'white',
					textDecoration: 'none',
				}}
			>
				{buttonContent}
			</Link>
		</Button>
	);
};

export default CustomButton;
