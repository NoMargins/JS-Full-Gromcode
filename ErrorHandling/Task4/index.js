const json = `{ "user: "Olenka", "age": 29 }`;
const parseUser = (json) => {
	try {
		return JSON.parse(json);
	} catch (err) {
		return null;
	}
};

console.log(parseUser(json));
