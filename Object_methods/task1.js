// let's create a function that returns the keys of oblect according to the certain criteria:
/// let's find users older than 18 y.o.

const users = {
	'John Doe': 19,
	Tom: 17,
	Bob: 20,
};

const getAdults = (obj) =>
	Object.entries(obj)
		.filter((user) => user[1] >= 18)
		.map((user) => user[0]);

console.log(getAdults(people));
