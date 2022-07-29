// get the balance sheet after operation with user's accounts

const withdraw = (clients, balances, client, amount) => {
	const index = clients.indexOf(client);
	const balance = balances[index] - amount;
	if (balance < 0) {
		return -1;
	}
	return balance;
};

console.log(
	'withdraw_1 ',
	withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)
);
console.log(
	'withdraw_2 ',
	withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)
);
