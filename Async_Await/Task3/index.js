'use strict';

/**
 * @param {string[]} users
 * @return {promise}
 */

const getRequestById = async (users) => {
	try {
		return fetch(`https://api.github.com/users/${users}`).then((response) =>
			response.json()
		);
	} catch (err) {
		console.log(err);
	}
};

export const getUsersBlogs = async (users) => {
	const arrOfPromise = users.map((user) => getRequestById(user));
	const resolvedPromises = await Promise.all(arrOfPromise);
	const linkList = resolvedPromises.map((el) => el.blog);
	return linkList;
};

// examples
getUsersBlogs(['google', 'facebook', 'reactjs']).then((linksList) =>
	console.log(linksList)
); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(['microsoft']).then((linksList) => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
