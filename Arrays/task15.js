// check wheather the array icnludes a number

// 1 - first way by methods

const includes = (arr, num) => {
	return arr.includes(num);
};

// 2 - second way by loops
function includes(arr, num) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === num) {
			return true;
		}
	}
	return false;
}
