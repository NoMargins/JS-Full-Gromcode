function buildObject(keysList, valuesList) {
	let newArr = [];

	for (let i = 0; i <= keysList.length - 1; i++) {
		newArr.push(keysList[i] + ': ' + valuesList[i]);
	}
	return newArr;
}
