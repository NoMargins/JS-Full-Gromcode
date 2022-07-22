function reverseArray(arr) {
	if (!Array.isArray(arr)) {
		return null;
	}
	if (Array.isArray(arr)) {
		let newArray = [];
		for (let i = 0; i <= arr.length - 1; i++) {
			newArray[i] = arr[arr.length - 1 - i];
		}
		return newArray;
	}
}

// examples
console.log(reverseArray([2, 5, 6, 8, 11, 9, 4])); // ===> [4, 9, 11, 8, 6, 5, 2]
console.log(reverseArray([1, 11, 7])); // ===> [7, 11, 1]
console.log(reverseArray([])); // ===> []
