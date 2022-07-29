// get square numbers of the array

// 1 - way 1

function squareArray(arr) {
	let newArray = [];
	if (!Array.isArray(arr)) {
		return null;
	} else {
		arr.slice().forEach((num) => newArray.push(num * num));
	}
	return newArray;
}

// 2 - way 2
function squareArray(arr) {
	if (!Array.isArray(arr)) {
		return null;
	} else {
		let squareNumbers = arr.map((num) => num * num);
		return squareNumbers;
	}
}

// examples
squareArray([10, 10, 10]); // ===> [100, 100, 100]
squareArray([0, 0, 1, 3]); // ===> [0, 0, 1, 9]
squareArray([-1, 0, -1, 1]); // ===> [1, 0, 1, 1]
