const getCounterElem = document.querySelector('.counter');
const getCounterValueElem = document.querySelector('.counter__value');

const handleButtonClick = (event) => {
	const isButton = event.target.classList.contains('counter__button');
	if (!isButton) {
		return;
	}
	const oldValue = Number(getCounterValueElem.textContent);
	const newValue =
		event.target.dataset.direction === 'reduce' ? oldValue - 1 : oldValue + 1;
	localStorage.setItem('counterValue', newValue);
	getCounterValueElem.textContent = newValue;
};

getCounterElem.addEventListener('click', handleButtonClick);

const onStorageChange = (e) => console.log(e);

window.addEventListener('storage', onStorageChange);

const onDocumentLoaded = () => {
	getCounterValueElem.textContent = localStorage.getItem('counterValue') || 0;
};
document.addEventListener('DOMContentLoaded', onDocumentLoaded);
