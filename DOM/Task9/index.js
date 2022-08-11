export const finishList = () => {
	const incr = 1;

	const list = document.querySelector('.list');
	const specListItem = list.querySelector('.special');
	const specText = specListItem.textContent;

	const first = document.createElement('li');
	const last = document.createElement('li');
	const specBefore = document.createElement('li');
	const specAfter = document.createElement('li');

	specBefore.textContent = specText - incr;
	specAfter.textContent = +specText + incr;
	first.textContent = incr;

	specListItem.before(specBefore);
	specListItem.after(specAfter);
	list.prepend(first);

	let listLength = list.querySelectorAll('li').length;
	console.dir(listLength);
	last.textContent = listLength + incr;
	list.append(last);

	return list;
};

//OR
// function finishList() {
// 	const listOfGivenNumbers = document.querySelector('.list');
// 	const numberOfGivenList = document.querySelector('li');
// 	const numberOfGivenListArray = Array.from(numberOfGivenList);
// 	const addedLi = document.createElement('li');
// 	let givenItemText = numberOfGivenList.innerHTML;
// 	if ((givenItemText = '2')) {
// 		addedLi.textContent = 1;
// 		numberOfGivenList.before(addedLi);
// 	}
// 	if ((givenItemText = '3')) {
// 		addedLi.textContent = 4;
// 		numberOfGivenList.after(addedLi);
// 	}
// 	if ((givenItemText = '5')) {
// 		addedLi.textContent = 6;
// 		numberOfGivenList.after(addedLi);
// 	}
// 	if ((givenItemText = '7')) {
// 		addedLi.textContent = 8;
// 		numberOfGivenList.after(addedLi);
// 	}
// 	return listOfGivenNumbers;
// }

// 	let correctArray = [1, 2, 3, 4, 5, 6, 7, 8];
// 	for (let i = 0; i < correctArray.length; i++) {
// 		if ((numberOfGivenList.innerHTML).includes(correctArray[i])) {
// 			correctArray.splice(i);
// 		}
// 	}

// 	for (let i = 0; i < correctArray; i++) {
// 		addedLi.innerHTML = correctArray[i];
// 		listOfGivenNumbers.append(addedLi);
// 	}
// 	return listOfGivenNumbers;
// }
