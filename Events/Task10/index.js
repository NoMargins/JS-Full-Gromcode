const allButtons = document.querySelectorAll('.pagination__page');
const allButtonsArray = Array.from(allButtons);
const handleClick = (event) => {
	console.log(event.target.getAttribute('data-page-number'));
};

allButtonsArray.map((el) => el.addEventListener('click', handleClick));
