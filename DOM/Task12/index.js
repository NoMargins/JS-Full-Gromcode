// put your code here
const squaredNumbers = () => {
	const getNumbers = document.querySelectorAll('.number');
	const getNumbersArray = Array.from(getNumbers);
	return getNumbersArray.map((el) => {
		const num = el.dataset.number;
		const squaredNum = num * num;
		el.dataset.squaredNumber = squaredNum;
		return el;
	});
	return getNumbers;
};
