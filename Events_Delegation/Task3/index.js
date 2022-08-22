// class="board">

// <span class="board__selected-seat">
const arenaEl = document.querySelector('.arena');
const boardEl = document.querySelector('.board');
const chosenSeetsEl = document.querySelector('.board__selected-seat');

// let's announce new elements
const newSectorEl = document.createElement('div');
newSectorEl.classList.add('sector');

const newLineEl = document.createElement('div');
newLineEl.classList.add('sector__line');

const newSeatEl = document.createElement('div');
newSeatEl.classList.add('sector__seat');

// function createTheArena(whereToAdd, whatToAdd, numb) {
// 	for (let el = 1; el <= numb; el++) {
// 		newEl = whereToAdd.append(whatToAdd);
// 		return (arenaEl.innerHTML += newEl);
// 		if (whatToAdd === newSeatEl) {
// 			newEl.innerHTML = el;
// 		}
// 	}
// 	return arenaEl.append(newElement);
// }

const generateNumbersRange = (from, to) => {
	const result = [];

	for (let i = 1; i <= to; i++) {
		result.push(i);
	}
	return result;
};

const getLineSeats = () =>
	generateNumbersRange(1, 10)
		.map(
			(seatNumber) => `
			<div
				class="sector__seat"
				data-seat-number="${seatNumber}"
			></div>
	`
		)
		.join('');

const getSectorLines = () => {
	const seatsString = getLineSeats();

	return generateNumbersRange(1, 10)
		.map(
			(lineNumber) => `
			<div
				class="sector__line"
				data-line-number="${lineNumber}"
			>${seatsString}</div>
	`
		)
		.join('');
};

const renderArena = () => {
	const linesString = getSectorLines();

	const sectorElem = generateNumbersRange(1, 3)
		.map(
			(sectorNumber) => `
			<div
				class="sector"
				data-sector-number="${sectorNumber}"
			>${linesString}</div>
	`
		)
		.join('');
	arenaEl.innerHTML = sectorElem;
};

renderArena();

const onSeatSelect = (event) => {
	const isSeat = event.target.classList.contains('sector__seat');

	if (!isSeat) {
		return;
	}

	const seatNumber = event.target.dataset.seatNumber;
	const lineNumber = event.target.closest('.sector__line').dataset.lineNumber;
	const sectorNumber = event.target.closest('.sector').dataset.sectorNumber;

	chosenSeetsEl.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
};

arenaEl.addEventListener('click', onSeatSelect); // delegation
