// find the names consisting some text & length

function filterNames(arr, text) {
	return arr.filter((element) => element.includes(text) && element.length > 5);
}
