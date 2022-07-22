// how to find the unique numbers in array

function uniqueCount(array) {
	let uniqueArray = [...new Set(array)];
	return uniqueArray.length;
}

console.log(uniqueCount([1, 4, 1, 8, 3, 4, 8, 8]));
