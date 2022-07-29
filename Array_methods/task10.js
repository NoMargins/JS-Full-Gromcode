// get sum of array

function sum(arr) {
	if (!Array.isArray(arr)) {
		return null;
	} else {
		let newValue = 0;
		return arr.reduce((a, b) => a + b, newValue);
	}
}
