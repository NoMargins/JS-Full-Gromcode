// let's transform the array to the object

const transformToObject = (arr) => {
	let obj = {};
	for (let element of arr) {
		obj[element] = element;
	}
	return obj;
};
