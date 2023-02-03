import React from 'react';
import { useSelector } from 'react-redux';
// import Link from 'next/link';
import { Link } from 'react-router-dom';
const Header = ({ currentUser }) => {
	let userName = null;
	if (currentUser && currentUser.indexOf('@') !== -1) {
		userName = currentUser.split('@')[0];
	}
	console.log(currentUser === true);
	const links = [
		!currentUser && { label: 'Sign up', href: '/auth/signup' },
		!currentUser && { label: 'Sign In', href: '/auth/signin' },
		currentUser && { label: 'Sign Out', href: '/auth/signout' },
	]
		.filter((linkConfig) => linkConfig)
		.map(({ label, href = '/' }) => {
			return (
				<li key={href} className="nav-item">
					<Link to={href}>
						<div>{label}</div>
					</Link>
				</li>
			);
		});
	return (
		<nav>
			<Link to={'/auth/signin'}>
				<div>{currentUser ? `Welcome:${userName}` : 'Quiz'}</div>
			</Link>
			<div>
				<ul>{links}</ul>
			</div>
		</nav>
	);
};

export default Header;
