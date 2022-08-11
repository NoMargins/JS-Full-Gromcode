const inputElem = document.querySelector('.text-input');

const textInputFunction = () => {
	console.log(inputElem.value);
};

inputElem.addEventListener('change', textInputFunction);
