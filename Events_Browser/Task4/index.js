const checkBox = document.querySelector('.task-status');

const checkBoxFunction = () => {
	if (checkBox.checked === true) {
		console.log(true);
	} else {
		console.log(false);
	}
};

checkBox.addEventListener('change', checkBoxFunction);
