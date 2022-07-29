// let's count all transactions per day

const getTotalRevenue = (transactions) => {
	let sum = 0;
	return transactions
		.flatMap((element) => Object.entries(element))
		.filter((element) => element.includes('amount'))
		.flatMap((element) => element[1])
		.map((element) => (sum += element))
		.reverse()[0];
};

// examples
const dayTransactions = [
	{ userId: 22, amount: 60, operation: 'sell' },
	{ userId: 22, amount: 160, operation: 'buy' },
	{ userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310

console.log(result);
