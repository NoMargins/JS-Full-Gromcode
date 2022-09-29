const getSum = (numbers) =>
	numbers
		.filter((num) => !isNaN(num))
		.reduce((acc, num) => acc + Number(num), 0);

export const asyncSum = (...asyncNumbers) =>
	Promise.all(asyncNumbers)
		.then((numbers) => getSum(numbers))
		.catch(() => Promise.reject(new Error("Can't calculate")));
