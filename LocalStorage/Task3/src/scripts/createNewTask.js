import { renderTasks } from './renderTasks.js';
import { setItem, getItem } from './storage.js';

const newTaskElem = document.querySelector('.task-input');
const submitElem = document.querySelector('.create-task-btn');

const newTaskFunction = () => {
	let newTasksList;
	if (getItem('tasksList') === null) {
		newTasksList = [];
	} else {
		newTasksList = getItem('tasksList');
	}
	const newTask = {
		text: `${newTaskElem.value}`,
		done: false,
		id: `${Math.floor(Math.random() * 1000)}`,
	};
	newTasksList.unshift(newTask);

	setItem('tasksList', newTasksList);
};

const submitFunction = () => {
	if (!newTaskElem.value) {
		newTaskElem.classList.add('task-input__notice');
		return;
	} else {
		newTaskElem.classList.remove('task-input__notice');
		newTaskFunction();
		renderTasks();
		newTaskElem.value = '';
	}
};

export const submitNewElemFunction = () =>
	submitElem.addEventListener('click', submitFunction);
