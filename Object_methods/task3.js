// create the function that has an object as one argument and returns keys from the object

function getKeys(obj) {
	return Object.keys(obj).forEach((each) => console.log(each));
}

console.log(getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' }));
