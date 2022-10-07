import { linkConstructor, getFullClientData } from './gateway.js';
import { hideSpinner } from './spinner.js';

const imgElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
const nameInputElem = document.querySelector('.name-form__input');
const reposList = document.querySelector('.repo-list');

export const getUser = () => {
	const clientInput = nameInputElem.value;
	const fullClientUrl = linkConstructor(clientInput);
	const getUserInfo = getFullClientData(fullClientUrl);
	return getUserInfo.then((result) => {
		const { name, avatar_url, location, repos_url } = result;
		userNameElem.textContent = name;
		userLocationElem.textContent = location ? `from ${location}` : '';
		imgElem.src = avatar_url;
		getFullClientData(repos_url)
			.then((response) => {
				const allRepoNames = response.map((obj) => obj.name);
				allRepoNames.map((el) => {
					const reposNameElem = document.createElement('span');
					reposNameElem.classList.add('repo-list__item');
					reposNameElem.innerText = el;
					reposList.append(reposNameElem);
				});
				hideSpinner();
			})
			.catch((err) => {
				hideSpinner();
				alert('Failed to load data');
			});
	});
};
