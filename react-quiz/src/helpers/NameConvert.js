export const convertUserName = (email) => {
	let userName = null;
	if (email && email.indexOf('@') !== -1) {
		userName = email.split('@')[0];
	}
	return userName;
};
