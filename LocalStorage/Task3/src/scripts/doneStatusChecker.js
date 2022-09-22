import { tasks } from './storage.js';
import { renderTasks } from './renderTasks.js';
import { getLocalStorageData } from './parsing.js';

const onChange = (event) => {
	return [...document.querySelectorAll('.list__item-checkbox')].map((el) => {
		if (
			el.getAttribute('id') === event.target.getAttribute('id') &&
			el.checked
		) {
			return tasks
				.filter(
					(obj) => Number(obj.id) === Number(event.target.getAttribute('id'))
				)
				.map((obj) => (obj.done = true));
		}
		if (
			el.getAttribute('id') === event.target.getAttribute('id') &&
			!el.checked
		) {
			return tasks
				.filter(
					(obj) => Number(obj.id) === Number(event.target.getAttribute('id'))
				)
				.map((obj) => (obj.done = false));
		}
	});
};

export const changeFunction = () => {
	document.querySelector('.list').addEventListener('change', function (event) {
		event.stopPropagation();
		onChange(event);
		localStorage.setItem('tasksList', JSON.stringify(tasks));
		renderTasks(getLocalStorageData('tasksList'));
	});
};
