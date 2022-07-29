// return object to array

const concatProps = (obj) => {
	let array = [];
	for (let key in obj) {
		array.push(obj[key]);
	}
	return array;
};
