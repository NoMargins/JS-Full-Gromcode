import { showSpinner } from './spinner.js';
import { getUser } from './render.js';
import { cleanReposList } from './repos.js';

const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
const submitBtnElem = document.querySelector('.name-form__btn');
const imgElem = document.querySelector('.user__avatar');
imgElem.src = 'https://avatars3.githubusercontent.com/u10001';

submitBtnElem.addEventListener('click', function () {
	userNameElem.textContent = '';
	userLocationElem.textContent = '';
	showSpinner();
	cleanReposList();
	getUser();
});
