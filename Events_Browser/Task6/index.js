const getButton = document.querySelector('.single-use-btn');

const resutGetting = () => {
	console.log('clicked');
	getButton.removeEventListener('click', resutGetting);
};

getButton.addEventListener('click', resutGetting);
