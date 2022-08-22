// algorithm
// Handlers:
// 1. create handler to change checkbox status by click in array
// 2. create handler to add new undone not empty task by click on 'create' button
// Render:
// 1. clear html list
// 2. clear input field
// 3. render new data array

const listElem = document.querySelector('.list');
const inputElem = document.querySelector('.task-input');
const createBtnElem = document.querySelector('.create-task-btn');

const tasks = [
	{ text: 'Buy milk', done: false, id: 1 },
	{ text: 'Pick up Tom from airport', done: true, id: 2 },
	{ text: 'Visit party', done: false, id: 3 },
	{ text: 'Visit doctor', done: false, id: 4 },
	{ text: 'Buy meat', done: true, id: 5 },
];

// ============ start ==============
const renderTasks = (tasksList) => {
	listElem.innerHTML = ''; // * from add new task
	inputElem.value = ''; // * from add new task

	const tasksElems = tasksList
		.sort((a, b) => a.done - b.done)
		.map(({ text, done, id }) => {
			const listItemElem = document.createElement('li');
			listItemElem.classList.add('list__item');
			const checkbox = document.createElement('input');

			checkbox.setAttribute('data-id', id);

			checkbox.setAttribute('type', 'checkbox');
			checkbox.checked = done;
			checkbox.classList.add('list__item-checkbox');
			if (done) {
				listItemElem.classList.add('list__item_done');
			}
			listItemElem.append(checkbox, text);

			return listItemElem;
		});

	listElem.append(...tasksElems);
};

renderTasks(tasks);

// ============= change checkbox status ================================================
const changeElDone = (array, idEl, status) => {
	array
		.filter((obj) => obj.id === +idEl)
		.map((el) => {
			el.done = status;
			return el;
		});
	return array;
};

const onChangeStatus = (event) => {
	const checkedId = event.target.getAttribute('data-id');
	if (
		event.target.classList.contains('list__item-checkbox') &&
		event.target.checked
	) {
		changeElDone(tasks, checkedId, true);
	} else {
		changeElDone(tasks, checkedId, false);
	}
	renderTasks(tasks);
};

listElem.addEventListener('change', onChangeStatus);

// =========== add new task ====================

const addNewTask = () => {
	const newTaskText = inputElem.value;
	if (!newTaskText) {
		return;
	}
	const idNum = tasks.length + 1;
	const newTaskObj = {
		text: newTaskText,
		done: false,
		id: idNum,
	};
	tasks.push(newTaskObj);
	renderTasks(tasks);
	// console.log(tasks);
};

createBtnElem.addEventListener('click', addNewTask);

// // --- test ----
// const idis = 5;
// console.log(tasks[4]);

// const test = tasks
//   .filter(obj => obj.id === idis)
//   .map(el => {
//     el.done = false;
//     return el;
//   });
