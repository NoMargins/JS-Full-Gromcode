// remove duplicates

// method 1
function removeDuplicates(array) {
	if (!Array.isArray(array)) {
		return null;
	} else {
		let newArray = array.filter((item, index) => {
			return array.indexOf(item) === index;
		});
		return newArray;
	}
}

// method 2

function removeDuplicates(array) {
	if (!Array.isArray(array)) {
		return null;
	}
	const newAr = new Set(array);
	const uniqyeSet = [...newAr];
	return uniqyeSet;
}

console.log(removeDuplicates([2, 3, 2, 5, 3, 6, 5]));
