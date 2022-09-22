import { renderTasks } from './renderTasks.js';
import { tasks } from './storage.js';

const newTaskElem = document.querySelector('.task-input');
const submitElem = document.querySelector('.create-task-btn');
const uniqueID = Math.floor(Math.random() * 10000);

const newTaskFunction = () => {
	const newTask = tasks.splice(0, 0, {
		text: `${newTaskElem.value}`,
		done: false,
		id: `${Math.floor(Math.random() * 1000)}`,
	});
	localStorage.setItem('tasks', JSON.stringify(tasks));
};

const submitFunction = () => {
	if (!newTaskElem.value) {
		newTaskElem.classList.add('task-input__notice');
		return;
	} else {
		newTaskElem.classList.remove('task-input__notice');
		newTaskFunction();
		renderTasks(localStorage.getItem('tasks'));
		newTaskElem.value = '';
		uniqueID + 1;
	}
};

export const submitNewElemFunction = () =>
	submitElem.addEventListener('click', submitFunction);
