const fullListElem = document.querySelector('.repo-list');

export const cleanReposList = () => {
	fullListElem.innerHTML = '';
};

export const fetchRepositories = (url) => {
	return fetch(url).then((response) => response.json());
};

export const renderRepos = (reposList) => {
	const result = reposList.map((obj) => obj.name);
	const final = result.map((name) => {
		const listElem = document.createElement('li');
		listElem.classList.add('repo-list__item');
		listElem.textContent = name;
		return listElem;
	});
	cleanReposList();
	return fullListElem.append(...final);
};
