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
import { convertUserName } from '../helpers/NameConvert';

const Header = () => {
	const { email } = useSelector((state) => state.user);

	const links = [
		!email && { label: 'SIGNUP', href: '/auth/signup' },
		!email && { label: 'SIGNIN', href: '/auth/signin' },
		email && { label: 'SIGNOUT', href: '/auth/signout' },
	]
		.filter((linkConfig) => linkConfig)
		.map(({ label, href }) => {
			return (
				<Link
					to={href}
					key={label}
					style={{ textDecoration: 'none', color: 'white' }}
				>
					<ListItem disablePadding>
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
				style={{ height: '60px', backgroundColor: '#4549B2' }}
			>
				<Toolbar
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						height: '60px',
					}}
				>
					<Link
						to={'/'}
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
						<div>{email ? `Welcome: ${convertUserName(email)}` : 'QUIZ'}</div>
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
