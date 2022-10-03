const apiURL = 'https://633aeb89e02b9b64c61ad82e.mockapi.io/submitPractice';

export const getUserInfo = (email) => {
	return fetch(`${apiURL}`)
		.then((response) => response.json())
		.then((response) => response.filter((obj) => obj.email === email));
};

export const createAccount = (userData) => {
	return fetch(apiURL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(userData),
	});
};
