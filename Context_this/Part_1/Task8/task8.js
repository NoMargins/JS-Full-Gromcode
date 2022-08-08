let arr = [];
const zeroLength = 2;
let res = 0;

const timer = {
	startTimer() {
		// setInterval(() => arr.push(1), 500);
		// return arr;
		// let i = 0;
		timerId = setInterval(() => res++, 1000);
		timer.minsPassed = Math.floor(res / 60);
		timer.secondsPassed = String(res - timer.minsPassed * 60).padStart(
			zeroLength,
			'0'
		);
		let showRes = this.minsPassed + ':' + this.secondsPassed;
	},
	getTime() {
		// if (res.length >= 2) {
		// 	res;
		// } else {
		// 	String(res).padStart(zeroLength, '0');
		// }
		alert(
			'Your time is ' +
				this.minsPassed +
				':' +
				String(res).padStart(zeroLength, '0')
		);
	},
	resetTimer() {
		alert("You've just reset the timer!");
		clearInterval(timerId, 1000);
	},
	stopTimer() {
		alert('You stopped the timer! Good try!');
		clearInterval(timerId, 1000);
		setInterval(() => (res = timerId++), 1000);
	},
};

const html = document.querySelector('html');
const button = document.querySelector('input');
const paragraph = document.querySelector('p');

button.addEventListener('click', updateButton);

function updateButton() {
	if (button.value === 'Запустити таймер') {
		button.value = 'Дізнатись час' || 'Зупинити таймер';
		paragraph.textContent = 'Таймер зупинено';
	}
	if (button.value === 'Дізнатись час') {
		button.value = 'Запустити таймер' || 'Зупинити таймер';
		paragraph.textContent = 'Таймер працює';
	} else {
		button.value === 'Зупинити таймер';
		paragraph.textContent = 'Таймер не працює';
	}
}
