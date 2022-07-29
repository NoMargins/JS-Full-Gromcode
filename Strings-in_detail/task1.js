const splitText = (text, length) => {
	const strArr = [];
	let startPosition = 0;
	if (!isNaN(text)) {
		return null;
	}
	if (length === 0 || length === undefined) {
		length = 10;
	}
	while (true) {
		let chunk = text.substr(startPosition, length);
		if (chunk.length === 0) {
			break;
		}
		strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
		startPosition += length;
	}
	return strArr.join('\n');
};

console.log(splitText('Me and myself are awesome coder'));
console.log(splitText(987979, 0));
