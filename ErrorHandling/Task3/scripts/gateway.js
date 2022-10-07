const gitHubCommonUrl = 'https://api.github.com/users';

export const linkConstructor = (userName) => {
	return gitHubCommonUrl + '/' + userName;
};

export const getFullClientData = (url) =>
	fetch(url)
		.then((response) => response.json())
		.catch((err) => alert('Failed to load data'));
