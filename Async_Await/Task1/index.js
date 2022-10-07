'use strict';

const githubApi = 'https://api.github.com/users';

export const fetchUser = async (userId) => {
	try {
		const userData = await fetch(`${githubApi}/${userId}`);
		if (!userData.ok) {
			return null;
		}
		const result = await userData.json();
		return result;
	} catch (err) {
		throw new Error('Failed to get user data');
	}
};
