let result = 0;

function getSum(start, end) {
	for (let i = start; i <= end; i++) {
		if (i % 2 === 0) {
			result += i;
		}
	}
	return result;
}

console.log(getSum(2, 22));
