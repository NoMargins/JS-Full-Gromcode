const getInput = document.querySelector('.task-status');

const checkBoxFunction = (event) => {
	console.log(event.target.checked === true);
};

getInput.addEventListener('change', checkBoxFunction);
