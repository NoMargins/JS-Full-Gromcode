// return clone array

function cloneArr(arr) {
	if (!Array.isArray(arr)) {
		return null;
	} else {
		let cloneArray = arr.slice();
		return cloneArray;
	}
}
