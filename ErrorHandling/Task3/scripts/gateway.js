const gitHubCommonUrl = 'https://api.github.com/users';

export const linkConstructor = (userName) => {
	return gitHubCommonUrl + '/' + userName;
};

export const fetchUserData = (name) =>
	fetch(`${gitHubCommonUrl}/${name}`).then((response) => {
		if (response.status === 200) {
			return response.json();
		}
		throw new Error('Failed to load data');
	});
