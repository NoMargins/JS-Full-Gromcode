// put your code here
export const finishForm = () => {
	const form = document.querySelector('form');
	const formEl = document.querySelector('input');
	const newFormEl = document.createElement('input');
	formEl.name = 'login';
	newFormEl.type = 'password';
	newFormEl.name = 'password';

	form.append(newFormEl);
	return form;
};

// function finishForm() {
// 	const newInput = document.createElement('input');
// 	newInput.setAttribute('name', 'login');
// 	newInput.setAttribute('type', 'text');
// 	const findForm = document.querySelector('form');
// 	findForm.append(newInput);
// 	const findInputForPassword = findForm.getElementsByName('password');
// 	findInputForPassword.setAttribute('type', 'password');
// }
