import { linkConstructor, getFullClientData } from './gateway.js';
import { hideSpinner } from './spinner.js';
import { renderRepos } from './repos.js';
import { renderUserData } from './user.js';

const nameInputElem = document.querySelector('.name-form__input');

export const getUser = () => {
	const clientInput = nameInputElem.value;
	const fullClientUrl = linkConstructor(clientInput);
	const getUserInfo = getFullClientData(fullClientUrl);
	return getUserInfo.then((result) => {
		const { repos_url } = result;
		renderUserData(result);
		getFullClientData(repos_url)
			.then((response) => {
				const allRepoNames = response.map((obj) => obj.name);
				renderRepos(allRepoNames);
				hideSpinner();
			})
			.catch((err) => {
				hideSpinner();
				alert(err.message);
			})
			.finally(() => hideSpinner());
	});
};
