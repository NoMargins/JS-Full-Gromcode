// get balance sheet after operation with user's accounts

function withdraw(clients, balances, client, amount) {
	for (let user in client) {
		for (let acc in balances) {
			if (client === clients[user] && user === acc && amount < balances[acc]) {
				balances[acc] = balances[acc] - amount;
				return balances;
			}
			if (client === clients[user] && user === acc && amount > balances[acc]) {
				return -1;
			}
		}
	}
}

console.log(
	'withdraw_1 ',
	withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)
);
console.log(
	'withdraw_2 ',
	withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)
);
