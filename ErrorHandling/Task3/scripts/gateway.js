const gitHubCommonUrl = 'https://api.github.com/users';

export const linkConstructor = (userName) => {
	return gitHubCommonUrl + '/' + userName;
};

export const fetchUserData = (name) =>
	fetch(`${gitHubCommonUrl}/${name}`)
		.then((response) => response.json())
		.catch((err) => alert('Failed to load data'));
