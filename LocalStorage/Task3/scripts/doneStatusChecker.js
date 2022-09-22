import { tasks } from './storage.js';
import { renderTasks } from './renderTasks.js';

const onChange = (event) => {
	[...document.querySelectorAll('.list__item-checkbox')].map((el) => {
		if (
			el.getAttribute('id') === event.target.getAttribute('id') &&
			el.checked
		) {
			tasks
				.filter(
					(obj) => Number(obj.id) === Number(event.target.getAttribute('id'))
				)
				.map((obj) => (obj.done = true));
		}
		if (
			el.getAttribute('id') === event.target.getAttribute('id') &&
			!el.checked
		) {
			tasks
				.filter(
					(obj) => Number(obj.id) === Number(event.target.getAttribute('id'))
				)
				.map((obj) => (obj.done = false));
		}
		return localStorage.setItem('tasksList', JSON.stringify(tasks));
	});
};

export const changeFunction = () => {
	document.querySelector('.list').addEventListener('change', function (event) {
		event.stopPropagation();
		onChange(event);
		renderTasks(JSON.parse(localStorage.getItem('tasksList')));
	});
};
