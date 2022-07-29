// function of random numbers array given the From, To, and Length

const getRandomNumbers = (length, from, to) => {
	let min = Math.ceil(from);
	let max = Math.floor(to);
	if (min > max || !Number.isInteger(max - min)) {
		return null;
	}
	let arr = [];
	arr.length = length;
	return arr
		.fill()
		.map(
			(el) =>
				(el = Math.floor(
					Math.random() * (Math.floor(to) - Math.ceil(from)) + Math.ceil(from)
				))
		);
};
