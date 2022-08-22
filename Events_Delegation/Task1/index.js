const tasks = [
	{ text: 'Buy milk', done: false, id: '1' },
	{ text: 'Pick up Tom from airport', done: false, id: '2' },
	{ text: 'Visit party', done: false, id: '3' },
	{ text: 'Visit doctor', done: true, id: '4' },
	{ text: 'Buy meat', done: true, id: '5' },
];

const newTaskElem = document.querySelector('.task-input');
const submitElem = document.querySelector('.create-task-btn');
const listElem = document.querySelector('.list');
const uniqueID = Math.floor(Math.random() * 10000);

const renderTasks = (tasksList) => {
	const tasksElems = tasksList
		.sort((a, b) => a.done - b.done)
		.map(({ text, done, id }) => {
			const listItemElem = document.createElement('li');
			listItemElem.classList.add('list__item');
			listItemElem.setAttribute('id', id);
			const checkbox = document.createElement('input');
			checkbox.setAttribute('type', 'checkbox');
			checkbox.setAttribute('id', id);
			checkbox.classList.add('list__item-checkbox');
			checkbox.checked = done;
			if (done === true) {
				listItemElem.classList.add('list__item_done');
			}

			if (checkbox.checked === true) {
				listItemElem.classList.add('list__item_done');
			}
			if (checkbox.checked === false) {
				listItemElem.classList.remove('list__item_done');
			}

			// checkbox.addEventListener('change', function () {
			// 	if (this.checked) {
			// 		listItemElem.classList.add('list__item_done');
			// 		return (done = 'true');
			// 	} else {
			// 		listItemElem.classList.remove('list__item_done');
			// 		return (done = 'false');
			// 	}
			// });

			listItemElem.append(checkbox, text);

			return listItemElem;

			// go over
		});

	listElem.innerHTML = '';
	listElem.prepend(...tasksElems);
};

renderTasks(tasks);

const allListItemElem = document.querySelectorAll('list__item');
allListItemArray = Array.from(allListItemElem);
const checkboxEl = document.querySelectorAll('.list__item-checkbox');
checkboxAllArray = Array.from(checkboxEl);

/// change the Done status in the list

const functionForList = (array, elID, value) => {
	array.map((el) => {
		if (el.id === elID) {
			el.done = value;
		}
	});
	return array;
};

const finalFunctionforSorting = (event) => {
	const getId = event.target.getAttribute('id');
	if (
		event.target.checked &&
		event.target.classList.contains('list__item-checkbox')
	) {
		functionForList(tasks, getId, true);
	} else {
		functionForList(tasks, getId, false);
	}
	renderTasks(tasks);
};

listElem.addEventListener('change', finalFunctionforSorting);

/// create new Task
const newTaskFunction = () => {
	tasks.splice(0, 0, {
		text: `${newTaskElem.value}`,
		done: false,
		id: `${Math.floor(Math.random() * 1000)}`,
	});
};

const submitFunction = () => {
	if (!newTaskElem.value) {
		newTaskElem.classList.add('task-input__notice');
		return;
	} else {
		newTaskElem.classList.remove('task-input__notice');
		newTaskFunction();
		renderTasks(tasks);
		newTaskElem.value = '';
		uniqueID + 1;
		console.log(tasks);
	}
};

submitElem.addEventListener('click', submitFunction);

//it worked with Gromcode
// const tasks = [
// 	{ text: 'Buy milk', done: false },
// 	{ text: 'Pick up Tom from airport', done: false },
// 	{ text: 'Visit party', done: false },
// 	{ text: 'Visit doctor', done: true },
// 	{ text: 'Buy meat', done: true },
// ];

// const newTaskElem = document.querySelector('.task-input');
// const submitElem = document.querySelector('.create-task-btn');
// const listElem = document.querySelector('.list');

// /// our main function !!!!
// // const returnValue = () => {
// // 	console.log();
// // };

// const newTaskFunction = () => {
// 	if (newTaskElem.value.length != 0) {
// 		const newlistItemElem = document.createElement('li');
// 		newlistItemElem.classList.add('list__item');
// 		newlistItemElem.textContent = newTaskElem.value;

// 		//checkbox
// 		const checkbox = document.createElement('input');
// 		checkbox.setAttribute('type', 'checkbox');
// 		checkbox.classList.add('list__item-checkbox');
// 		if (checkbox.checked) {
// 			newlistItemElem.classList.add('list__item_done');
// 		}

// 		// back to list
// 		newlistItemElem.prepend(checkbox);
// 		listElem.prepend(newlistItemElem); // it's final step
// 		newTaskElem.value = '';
// 	}

// 	return listElem; // we see the changes in the browser
// };

// submitElem.addEventListener('click', newTaskFunction);

// const renderTasks = (tasksList) => {
// 	const tasksElems = tasksList
// 		.sort((a, b) => a.done - b.done)
// 		.map(({ text, done }) => {
// 			const listItemElem = document.createElement('li');
// 			listItemElem.classList.add('list__item');
// 			const checkbox = document.createElement('input');
// 			checkbox.setAttribute('type', 'checkbox');
// 			checkbox.checked = done;
// 			checkbox.classList.add('list__item-checkbox');
// 			if (done) {
// 				listItemElem.classList.add('list__item_done');
// 			}

// 			listItemElem.append(checkbox, text);

// 			return listItemElem;
// 		});

// 	listElem.append(...tasksElems);
// };

// renderTasks(tasks);
