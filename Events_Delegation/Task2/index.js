// needed elements
const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');

const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');

// code for validations
const isRequired = (value) => (value ? undefined : 'Required'); // emptiness check - if empty: red message "Reqired"

const isEmail = (value) =>
	value.includes('@') ? undefined : 'Should be an email'; // @ check : --//--

// group validators in 1 func
// 1. declear names funcs for each validation
const validatorsByField = {
	email: [isRequired, isEmail],
	password: [isRequired],
};
// 2. create common validators func
const validate = (fieldName, value) => {
	const validators = validatorsByField[fieldName]; // ! [] - props VALUE !
	return validators
		.map((validator) => validator(value)) // define values    !!!!!!!!!!
		.filter((errorText) => errorText) // filter undefined
		.join(', '); // glue errors into 1 string
};
// -end-

const onEmailChange = (event) => {
	const errorText = validate('email', event.target.value); // ! " " - for email; sec arg = event.target.value !

	// const errorText = [isRequired, isEmail] // take 2 funcs to go through in array
	//   .map(validator => validator(event.target.value)) // define values    !!!!!!!!!!
	//   .filter(errorText => errorText) // filter undefined
	//   .join(', '); // glue errors into 1 string

	emailErrorElem.textContent = errorText;
};

const onPasswordChange = (event) => {
	const errorText = validate('password', event.target.value);

	// const errorText = [isRequired] // take 1 funcs to go through in array
	//   .map(validator => validator(event.target.value)) // define values    !!!!!!!!!!
	//   .filter(errorText => errorText) // filter undefined
	//   .join(', '); // glue errors into 1 string

	passwordErrorElem.textContent = errorText;
};

emailInputElem.addEventListener('input', onEmailChange);
passwordInputElem.addEventListener('input', onPasswordChange);

// ======= code to output inputs in alert =========
const formElem = document.querySelector('.login-form');

const onFormSubmit = (event) => {
	event.preventDefault(); // reject default browser behavior

	// const formData = [...new FormData(formElem)] // get key:value
	//   .reduce((acc, [field, value]) => ({ ...acc, [field]: value }), {});

	const formData = Object.fromEntries(new FormData(formElem)); // 2d variant

	alert(JSON.stringify(formData)); // object object -> {'email':'str', 'password':'str'}
};

formElem.addEventListener('submit', onFormSubmit);
