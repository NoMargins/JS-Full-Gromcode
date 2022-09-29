const imgElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
const nameInputElem = document.querySelector('.name-form__input');
const submitBtnElem = document.querySelector('.name-form__btn');

imgElem.src = 'https://avatars.githubusercontent.com/u/9919?v=4';
const gitHubCommonUrl = 'https://api.github.com/users';

const linkConstructor = (userName) => {
	return gitHubCommonUrl + '/' + userName;
};

const getUser = () => {
	const clientInput = nameInputElem.value;
	const getFullclientUrl = linkConstructor(clientInput);
	return fetch(getFullclientUrl)
		.then((response) => response.json())
		.then((result) => {
			const { login, avatar_url, location } = result;
			userNameElem.textContent = login;
			userLocationElem.textContent = location ? `from ${location}` : '';
			imgElem.src = avatar_url;
		});
};

submitBtnElem.addEventListener('click', getUser);
