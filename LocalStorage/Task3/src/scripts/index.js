import { renderTasks } from './renderTasks.js';
import { submitNewElemFunction } from './createNewTask.js';
import { changeFunction } from './doneStatusChecker.js';
import { getLocalStorageData } from './parsing.js';

document.addEventListener('DOMContentLoaded', function () {
	renderTasks(getLocalStorageData('tasksList'));
	submitNewElemFunction();
	changeFunction();
});

const onStorageChange = (e) => console.log(e);

window.addEventListener('storage', onStorageChange);
