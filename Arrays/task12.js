//to sort the massive according to descending / ascending

function sortAsc(array) {
	if (!Array.isArray(array)) {
		return null;
	} else {
		return array.sort((a, b) => a - b);
	}
}

function sortDesc(array) {
	if (!Array.isArray(array)) {
		return null;
	} else {
		return array.sort((a, b) => b - a);
	}
}
