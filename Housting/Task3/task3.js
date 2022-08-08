export const createArrayOfFunctions = (length) => {
	const arr = [];
	if (typeof length !== 'number' && typeof length !== 'undefined') {
		return null;
	}
	// if (typeof length === 'undefined') {
	//   return arr;
	// }
	for (let i = 0; i < length; i += 1) {
		arr[i] = function () {
			return i;
		};
	}

	return arr;
};

console.log(createArrayOfFunctions(10)[5]());
console.log(createArrayOfFunctions(10));
console.log(createArrayOfFunctions('hi'));
console.log(createArrayOfFunctions());
