import { showSpinner, hideSpinner } from './spinner.js';
import { cleanReposList, renderRepos, fetchRepositories } from './repos.js';
import { renderUserData } from './user.js';
import { fetchUserData } from './gateway.js';

const submitBtnElem = document.querySelector('.name-form__btn');
const imgElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.name-form__input');
// imgElem.src = 'https://avatars3.githubusercontent.com/u10001';
imgElem.src = 'https://avatars.githubusercontent.com/u/895678?s=400&v=4';

const defaultUser = {
	name: '',
	avatar_url: 'https://avatars3.githubusercontent.com/u10001',
	location: '',
};
renderUserData(defaultUser);

const onSearchUser = () => {
	showSpinner();
	cleanReposList();
	const userName = userNameElem.value;
	fetchUserData(userName)
		.then((userData) => {
			renderUserData(userData);
			return userData.repos_url;
		})
		.then((url) => {
			return fetchRepositories(url);
		})
		.then((reposList) => {
			renderRepos(reposList);
			hideSpinner();
		})
		.catch((err) => {
			hideSpinner();
			alert(err.message);
		});
};

submitBtnElem.addEventListener('click', onSearchUser);
