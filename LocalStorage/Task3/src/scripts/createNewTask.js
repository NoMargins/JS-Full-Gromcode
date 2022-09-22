import { renderTasks } from './renderTasks.js';
import { tasks } from './storage.js';
import { getLocalStorageData } from './parsing.js';

const newTaskElem = document.querySelector('.task-input');
const submitElem = document.querySelector('.create-task-btn');
const uniqueID = Math.floor(Math.random() * 10000);

const newTaskFunction = () => {
	tasks.push({
		text: `${newTaskElem.value}`,
		done: false,
		id: `${Math.floor(Math.random() * 1000)}`,
	});
	return tasks;
};

const submitFunction = () => {
	if (!newTaskElem.value) {
		newTaskElem.classList.add('task-input__notice');
		return;
	} else {
		newTaskElem.classList.remove('task-input__notice');
		newTaskFunction();
		localStorage.setItem('tasksList', JSON.stringify(tasks));
		renderTasks(getLocalStorageData('tasksList'));
		newTaskElem.value = '';
		uniqueID + 1;
	}
};

export const submitNewElemFunction = () =>
	submitElem.addEventListener('click', submitFunction);
