const increaseEvenEl = (arr, delta) => {
	if (!Array.isArray(arr)) {
		return null;
	}
	if (Array.isArray(arr)) {
		let newArray = arr.slice();
		for (let i = 0; i <= newArray.length - 1; i++) {
			if (newArray[i] % 2 === 0) {
				newArray[i] = newArray[i] + delta;
			} else {
				newArray[i] = newArray[i];
			}
		}
		return newArray;
	}
};
// examples
console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20)); // ===> [22, 5, 26, 28, 11, 9, 24]
console.log(increaseEvenEl([7, 11, 1], 10)); // ===> [7, 11, 1]
console.log(increaseEvenEl([], 120)); // ===> []
