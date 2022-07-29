// return reverse array
const reverseArray = (array) => {
	if (!Array.isArray(array)) {
		return null;
	} else {
		return array.slice().reverse();
	}
};
