// Let's sptit the text on the substrings of given length.
// If the length of such substring is less than given length, let's add dots ('.') in the end.

const splitString = (text, length) => {
	const strArr = [];
	let startPosition = 0;
	let dot = '.';

	if (!isNaN(text)) {
		return null;
	}
	if (length === 0 || length === undefined) {
		length = 10;
	}
	while (true) {
		let newDot = '';
		let chunk = text.substr(startPosition, length);
		if (chunk.length === 0) {
			break;
		}
		if (chunk.length < length) {
			newDot += dot.repeat(length - chunk.length);
		}
		strArr.push(chunk + newDot);
		startPosition += length;
	}
	return strArr;
};

console.log(splitString('Me and myself are awesome coder'));
console.log(splitString(987979, 0));
