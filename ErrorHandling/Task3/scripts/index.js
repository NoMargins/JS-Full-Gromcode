import { hideSpinner, showSpinner } from './spinner.js';
import { getUser } from './user.js';

const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
const nameInputElem = document.querySelector('.name-form__input');
const reposList = document.querySelector('.repo-list');
const submitBtnElem = document.querySelector('.name-form__btn');
const imgElem = document.querySelector('.user__avatar');
imgElem.src = 'https://avatars.githubusercontent.com/u/9919?v=4';

submitBtnElem.addEventListener('click', function () {
	userNameElem.textContent = '';
	userLocationElem.textContent = '';
	reposList.textContent = '';
	showSpinner();
	getUser();
});
