import { getItem } from './storage.js';

const listElem = document.querySelector('.list');

export const renderTasks = () => {
	let tasksList;
	if (getItem('tasksList') === null) {
		tasksList = [];
	} else {
		tasksList = getItem('tasksList');
	}
	listElem.innerHTML = '';
	const tasksElems = tasksList
		.sort((a, b) => a.done - b.done)
		.map(({ text, done, id }) => {
			const listItemElem = document.createElement('li');
			listItemElem.classList.add('list__item');
			const checkbox = document.createElement('input');
			checkbox.setAttribute('type', 'checkbox');
			checkbox.setAttribute('id', id);
			checkbox.classList.add('list__item-checkbox');
			checkbox.checked = done;
			if (done === true) {
				listItemElem.classList.add('list__item_done');
			}
			if (done === false && listElem.classList.contains('list__item_done')) {
				listItemElem.classList.remove('list__item_done');
			}

			listItemElem.append(checkbox, text);

			return listItemElem;
		});
	listElem.append(...tasksElems);
};
