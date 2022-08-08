export const createCalculator = () => {
	let result = 0;

	const getMemo = () => {
		return result;
	};

	const add = (inc) => {
		result += inc;
	};

	const decrease = (dec) => {
		result -= dec;
	};

	const reset = () => {
		result = 0;
	};
	return {
		add,
		decrease,
		reset,
		getMemo,
	};
};
