// transformation to the flat array and ranging on ascendance

const flatArray = (arr) =>
	arr
		.slice()
		.flat()
		.sort((a, b) => a - b);

console.log(flatArray([[1, 4, 6], 4, [2, 8], 11]));
