const listElem = document.querySelector('.repo-list');

export const cleanReposList = () => {
	listElem.innerHTML = '';
};

export const renderRepos = (repoNames) => {
	repoNames.map((el) => {
		const reposNameElem = document.createElement('span');
		reposNameElem.classList.add('repo-list__item');
		reposNameElem.innerText = el;
		listElem.append(reposNameElem);
	});
	return listElem;
};
