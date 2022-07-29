// get the avarage of array

function arrAverage(arr) {
	if (!Array.isArray(arr)) {
		return null;
	} else {
		let newValue = 0;
		return arr.reduce((a, b) => a + b, newValue) / arr.length;
	}
}

console.log(arrAverage([2, 5, 10, -12, 0]));
