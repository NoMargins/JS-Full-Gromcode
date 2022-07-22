//find the min and max number and check their sum

function checker(arr) {
	if (!Array.isArray(arr)) {
		return null;
	} else {
		let minNumber = Math.min(...arr);
		let maxNumber = Math.max(...arr);
		return minNumber + maxNumber > 1000;
	}
}

// examples
console.log(checker([2, 5, 6, 8, 1100, 9, 4])); // ===> [4, 9, 11, 8, 6, 5, 2]
console.log(checker([1, 11, 7])); // ===> [7, 11, 1]
console.log(checker([])); // ===> []
