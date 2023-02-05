import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import QuizIcon from '@mui/icons-material/Quiz';
import Toolbar from '@mui/material/Toolbar';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
	const { email } = useSelector((state) => state.user);
	let userName = null;
	if (email && email.indexOf('@') !== -1) {
		userName = email.split('@')[0];
	}

	const links = [
		!email && { label: 'SIGNUP', href: '/auth/signup' },
		!email && { label: 'SIGNIN', href: '/auth/signin' },
		email && { label: 'SIGNOUT', href: '/auth/signout' },
	]
		.filter((linkConfig) => linkConfig)
		.map(({ label, href }, key) => {
			console.log(label);
			return (
				<Link to={href} style={{ textDecoration: 'none', color: 'white' }}>
					<ListItem key={label} disablePadding>
						<ListItemButton sx={{ textAlign: 'center' }}>
							<ListItemText primary={label} />
						</ListItemButton>
					</ListItem>
				</Link>
			);
		});
	return (
		<Box sx={{ width: '100%' }}>
			<AppBar
				position="sticky"
				style={{ height: '60px', backgroundColor: 'darkBlue' }}
			>
				<Toolbar
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						height: '60px',
					}}
				>
					<Link
						to={'/auth/signin'}
						style={{
							textDecoration: 'none',
							color: 'white',
							display: 'flex',
						}}
					>
						<QuizIcon
							style={{
								marginRight: '1rem',
							}}
						/>
						<div>{email ? `Welcome: ${userName}` : 'QUIZ'}</div>
					</Link>
					<ul style={{ display: 'flex', justifyContent: 'flex-end' }}>
						{links}
					</ul>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
