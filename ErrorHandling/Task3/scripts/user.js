import { linkConstructor, getFullClientData } from './gateway.js';
import { hideSpinner } from './spinner.js';
import { renderRepos } from './repos.js';

const imgElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
const nameInputElem = document.querySelector('.name-form__input');

export const getUser = () => {
	const clientInput = nameInputElem.value;
	const fullClientUrl = linkConstructor(clientInput);
	const getUserInfo = getFullClientData(fullClientUrl);
	return getUserInfo.then((result) => {
		hideSpinner();
		const { name, avatar_url, location, repos_url } = result;
		userNameElem.textContent = name;
		userLocationElem.textContent = location ? `from ${location}` : '';
		imgElem.src = avatar_url;
		getFullClientData(repos_url)
			.then((response) => {
				const allRepoNames = response.map((obj) => obj.name);
				renderRepos(allRepoNames);
			})
			.catch((err) => {
				hideSpinner();
				alert('Failed to load data');
			});
	});
};
