const gitHubCommonUrl = 'https://api.github.com/users';

export const linkConstructor = (userName) => {
	return gitHubCommonUrl + '/' + userName;
};

export const fetchUserData = async (name) => {
	const result = await fetch(`${gitHubCommonUrl}/${name}`);
	if (result.status === 200) {
		return await result.json();
	}
	throw new Error('Failed to load data');
};
