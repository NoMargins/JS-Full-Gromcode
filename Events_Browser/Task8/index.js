const getTextInput = document.querySelector('.text-input');

const getTextFunction = (event) => {
	console.log(event.target.value);
};

getTextInput.addEventListener('change', getTextFunction);
