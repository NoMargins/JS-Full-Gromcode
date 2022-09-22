import { setItem, getItem } from './storage.js';
import { renderTasks } from './renderTasks.js';

const onChange = (event) => {
	event.stopPropagation();
	const isCheckbox = event.target.classList.contains('.list__item-checkbox');
	const storage = getItem('tasksList');

	if (!isCheckbox) {
		return;
	} else {
		[...document.querySelectorAll('.list__item-checkbox')].map((el) => {
			if (
				el.getAttribute('id') === event.target.getAttribute('id') &&
				el.checked
			) {
				storage
					.filter((task) => task.id === event.target.getAttribute('id'))
					.map((task) => (task.done = true));
			}
			if (
				el.getAttribute('id') === event.target.getAttribute('id') &&
				!el.checked
			) {
				storage
					.filter((task) => task.id === event.target.getAttribute('id'))
					.map((task) => (task.done = false));
			}
			return storage;
		});
		setItem('tasksList', storage);
		renderTasks();
	}
};

export const changeFunction = () => {
	document.querySelector('.list').addEventListener('change', onChange);
};
