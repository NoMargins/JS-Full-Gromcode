'use strict';

const tasks = [
	{ text: 'Buy milk', done: false },
	{ text: 'Pick up Tom from airport', done: false },
	{ text: 'Visit party', done: false },
	{ text: 'Visit doctor', done: true },
	{ text: 'Buy meat', done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = (tasksList) => {
	const listElement = document.querySelector('.list');
	const listItemElements = tasksList
		.sort((a, b) => a.done - b.done)
		.map(({ text, done }) => {
			const listItemElements = document.createElement('li');
			listItemElements.classList.add('list__item');
			if (done) {
				listItemElements.classList.add('list__item_done');
			}
			const checkboxElement = document.createElement('input');
			checkboxElement.setAttribute('type', 'checkbox');
			checkboxElement.checked = done;
			checkboxElement.classList.add('list__item-checkbox');
			listItemElements.append(checkboxElement, text);

			return listItemElements;
		});
	listElement.append(...listItemElements);
};

renderTasks(tasks);
