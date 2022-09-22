import { renderTasks } from './renderTasks.js';
import { submitNewElemFunction } from './createNewTask.js';
import { changeFunction } from './doneStatusChecker.js';

document.addEventListener('DOMContentLoaded', function () {
	renderTasks();
	submitNewElemFunction();
	changeFunction();
});

const onStorageChange = (e) => console.log(e);

window.addEventListener('storage', onStorageChange);
