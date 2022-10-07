const fullListElem = document.querySelector('.repo-list');

export const cleanReposList = () => {
	fullListElem.innerHTML = '';
};

export const fetchRepositories = async (url) => {
	const result = await fetch(url);
	return await result.json();
};

export const renderRepos = (reposList) => {
	// const result = reposList.map((obj) => obj.name);
	const final = reposList.map(({ name }) => {
		const listElem = document.createElement('li');
		listElem.classList.add('repo-list__item');
		listElem.textContent = name;
		return listElem;
	});
	cleanReposList();
	return fullListElem.append(...final);
};
