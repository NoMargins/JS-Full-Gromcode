const checkSum = (arr) => {
	if (!Array.isArray(arr)) {
		return null;
	}
	let sum = 0;
	for (let el = 0; el < arr.length; el++) {
		sum += arr[el];
	}
	return sum > 100;
};

// examples
console.log(checkSum([10, 10, 10])); // ===> false
console.log(checkSum([10, 99, 1])); // ===> true
console.log(checkSum([-6, -3, 200])); // ===> true
