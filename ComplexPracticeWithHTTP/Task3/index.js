const baseUrl = 'https://633aeb89e02b9b64c61ad82e.mockapi.io/users';

export function getUsersList() {
	return fetch(baseUrl).then((result) => result.json());
}

export function getUserById(userId) {
	return fetch(`${baseUrl}/${userId}`).then((result) => result.json());
}

export function createUser(userData) {
	return fetch(`${baseUrl}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(userData),
	});
}

export function deleteUser(userId) {
	return fetch(`${baseUrl}/${userId}`, {
		method: 'DELETE',
	});
}

export function updateUser(userId, userData) {
	return fetch(`${baseUrl}/${userId}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(userData),
	});
}
