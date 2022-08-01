//Create a function which will return the reverse text

const reverseString = (str) => {
	if (!isNaN(str)) {
		return null;
	} else {
		return str.split('').reverse().join('');
	}
};

console.log(reverseString('Hello, world!'));
