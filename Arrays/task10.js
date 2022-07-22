//Clone Array

function cloneArr(arr) {
	if (!Array.isArray(arr)) {
		return null;
	} else {
		let newArray = arr.slice();
		return newArray;
	}
}
