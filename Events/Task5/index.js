const getButton = document.querySelector('.search__btn');
const getInput = document.querySelector('.search__input');

const pushButton = () => {
	console.log(getInput.value);
};

getButton.addEventListener('click', pushButton);
