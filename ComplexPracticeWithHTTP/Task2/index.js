const apiURL = 'https://633aeb89e02b9b64c61ad82e.mockapi.io/submitPractice';

const getUserInfo = (id) => {
	return fetch(`${apiURL}/${id}`).then((response) => response.json());
};

const createAccount = (userData) => {
	return fetch(apiURL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(userData),
	});
};

const getAllInputsELem = Array.from(document.querySelectorAll('.form-input'));
const getSubmitButtonElem = document.querySelector('.submit-button');
const getFormElem = document.querySelector('.login-form');

const validation = () => {
	const isValide = getFormElem.reportValidity();
	getSubmitButtonElem.disabled = !isValide;
	return getSubmitButtonElem.disabled;
};

const onFormSubmit = (e) => {
	e.preventDefault();

	const [emailValue, userNameValue, passwordValue] = getAllInputsELem;
	const mail = emailValue.value;
	const password = passwordValue.value;
	const name = userNameValue.value;

	getAllInputsELem.map;
	const userData = {
		mail,
		password,
		name,
	};

	createAccount(userData)
		.then((response) => response.json())
		.then((result) => {
			alert(JSON.stringify(result));
			getFormElem.reset();
			getSubmitButtonElem.disabled = true;
		})
		.catch(() => new Error('Can/`t alert user info'));
};

getFormElem.addEventListener('submit', onFormSubmit);
getFormElem.addEventListener('input', validation);
