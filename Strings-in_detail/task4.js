// Let's create a function that finds the number of String repeats in Text.

const countOccurrences = (text, str) => {
	if (str.length === 0) {
		return null;
	}

	if (!isNaN(text)) {
		text = '';
	}

	if (text.includes(str)) {
		return text.split(str).length - 1;
	} else {
		return 0;
	}
};

console.log(
	countOccurrences('Amanda was out of the theatre for many days', 'a')
);
console.log(countOccurrences(8765865, 'a'));
console.log(countOccurrences('', 'a'));
