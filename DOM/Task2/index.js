const getTitleElement = () => {
	const titleElem = document.querySelector('.title');
	console.dir(titleElem);
	return titleElem;
};

const getInputElement = () => {
	const inputElem = document.querySelector('input');
	const textAtr = inputElem.getAttribute('type', 'text');
	console.dir(inputElem);
	if (textAtr) {
		console.dir(inputElem);
		return inputElem;
	}
	return false;
};
