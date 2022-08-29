'use strict';

export const tasks = [
	{ text: 'Buy milk', done: false, id: Date.now() - 1, date: Date.now() - 1 },
	{
		text: 'Pick up Tom from airport',
		done: false,
		id: Date.now() - 2,
		date: Date.now() - 2,
	},
	{
		text: 'Visit party',
		done: false,
		id: Date.now() - 3,
		date: Date.now() - 3,
	},
	{
		text: 'Visit doctor',
		done: true,
		id: Date.now() - 4,
		date: Date.now() - 4,
	},
	{ text: 'Buy meat', done: true, id: Date.now() - 5, date: Date.now() - 5 },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = (tasksList) => {
	const listElement = document.querySelector('.list');
	const listItemElements = tasksList
		.sort((a, b) => a.done - b.done || a.date - b.date)
		.map(({ text, done, id, date }) => {
			const listItemElements = document.createElement('li');
			listItemElements.classList.add('list__item');
			if (done) {
				listItemElements.classList.add('list__item_done');
			}
			const checkboxElement = document.createElement('input');
			checkboxElement.setAttribute('type', 'checkbox');
			checkbox.setAttribute('data-id', id);
			checkbox.setAttribute('data-date', date);

			checkboxElement.checked = done;
			checkboxElement.classList.add('list__item-checkbox');
			listItemElements.append(checkboxElement, text);

			return listItemElements;
		});
	listElement.append(...listItemElements);
};

renderTasks(tasks);

const validateTaskLength = (inputText) => inputText.length < 1; // ? true: false;

const onChangeStatus = (event) => {
	const checkedId = event.target.getAttribute('data-id');

	if (!event.target.classList.contains('list__item-checkbox')) {
		return;
	}
	const changedTask = tasks.find((el) => el.id === +checkedId);
	changedTask.done = event.target.checked;
	changedTask.data = Date.now();

	console.log('done tasks on change', tasks);
	// getSortedList(tasks);
	renderTasks(tasks);
};

listElem.addEventListener('click', onChangeStatus);

const addNewTask = () => {
	const newTaskText = inputElem.value;
	// console.log(newTaskText.length);

	if (validateTaskLength(newTaskText)) {
		alert('enter valid task');
		renderTasks(tasks);
		return;
	}
	const idNum = Date.now();
	const doneDataNum = Date.now();
	const newTaskObj = {
		text: newTaskText,
		done: false,
		id: idNum,
		data: doneDataNum,
	};
	tasks.push(newTaskObj);

	renderTasks(tasks);
};

createBtnElem.addEventListener('click', addNewTask);
