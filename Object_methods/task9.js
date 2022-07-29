// 1st way  - to create united array connecting 2 other arrays
function buildObject(keysList, valuesList) {
	let newArr = [];

	for (let i = 0; i <= keysList.length - 1; i++) {
		newArr.push(keysList[i] + ': ' + valuesList[i]);
	}
	return newArr;
}

// 2nd way - approach through the object

function buildObject(keysList, valuesList) {
	let newObj = {};
	for (let i = 0; i <= keysList.length - 1; i++) {
		newObj[keysList[i]] = valuesList[i];
	}
	return newObj;
}
