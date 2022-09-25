'use strict';

export const requestUserData = (userId) => {
	const request = new Promise((resolve, rejected) => {
		if (userId === 'broken') {
			setTimeout(() => {
				rejected(new Error('User not found'));
			}, 500);
		} else {
			setTimeout(() => {
				resolve({
					name: 'John',
					age: 17,
					email: `${userId}@example.com`,
					userId,
				});
			}, 1000);
		}
	});
	return request;
};

requestUserData('broken')
	.then((data) => console.log(data))
	.catch((error) => console.log(error));
