const gitHubCommonUrl = 'https://api.github.com/users';

export const linkConstructor = (userName) => {
	return gitHubCommonUrl + '/' + userName;
};

export const fetchUserData = async (name) => {
	try {
		const result = await fetch(`${gitHubCommonUrl}/${name}`);
		if (!result.ok) {
			alert('Failed to load data');
		}
		return await result.json();
	} catch (err) {
		throw new Error(err);
	}
};
