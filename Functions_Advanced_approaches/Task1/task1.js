export const calc = (initValue) => {
	let result = initValue;
	const calculator = {
		add(number) {
			result += number;
			return this;
		},
		mult(number) {
			result *= number;
			return this;
		},
		subtract(number) {
			result -= number;
			return this;
		},
		div(number) {
			result /= number;
			return this;
		},
		result() {
			return result;
		},
	};
	return calculator;
};

const res = calc(3).add(4).mult(5).div(2).subtract(5).result();
