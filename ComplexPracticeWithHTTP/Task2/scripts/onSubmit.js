import { createAccount, getUserInfo } from './dataGateway.js';

const getAllInputsELem = Array.from(document.querySelectorAll('.form-input'));
const getSubmitButtonElem = document.querySelector('.submit-button');
const getFormElem = document.querySelector('.login-form');

// getAllInputsELem.map((form) => (form.value = 'put here'));

const validation = () => {
	const isValide = getFormElem.reportValidity();
	getSubmitButtonElem.disabled = !isValide;
	return getSubmitButtonElem.disabled;
};

const onFormSubmit = () => {
	const [email, userName, password] = getAllInputsELem;
	const emailValue = email.value;
	const passwordValue = password.value;
	const usernameValue = userName.value;

	getAllInputsELem.map;
	const userData = {
		email: emailValue,
		password: passwordValue,
		name: usernameValue,
		registrationDate: new Date().toISOString(),
	};

	createAccount(userData)
		.then(() => getUserInfo(emailValue))
		.then((result) => {
			const [{ email, password, name }] = result;
			alert(JSON.stringify(result));
		});
};

export const listenForSubmit = () => {
	getFormElem.addEventListener('submit', function (e) {
		e.preventDefault();
		onFormSubmit();
		// getUserInfo().then((result) => console.log(result));
		getAllInputsELem.map((input) => (input.value = ''));
	});
};

export const listenForValues = () => {
	getFormElem.addEventListener('input', validation);
};
