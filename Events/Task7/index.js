const getButtons = document.querySelectorAll('.btn');
const buttonsArray = Array.from(getButtons);

const handleClick = (event) => {
	const res = event.target.textContent;
	console.log(res);
};

buttonsArray.map((el) => el.addEventListener('click', handleClick));
