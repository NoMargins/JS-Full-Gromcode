export const reverseArray = (arr) => {
	if (!Array.isArray(arr) || arr.length === 0) {
		return null;
	}
	if (Array.isArray(arr)) {
		let newArray = [];
		for (let i = 0; i <= arr.length - 1; i++) {
			newArray[i] = arr[arr.length - 1 - i];
		}
		return newArray;
	}
};

export const withdraw = (clients, balances, client, amount) => {
	for (let user in client) {
		for (let acc in balances) {
			if (client === clients[user] && user === acc && amount <= balances[acc]) {
				balances[acc] = balances[acc] - amount;
				return balances;
			}
			if (client === clients[user] && user === acc && amount > balances[acc]) {
				return -1;
			}
		}
	}
};

export const getAdults = (obj) => {
	let newObj = {};
	for (let key in obj) {
		if (obj[key] >= 18) {
			newObj[key] = obj[key];
		}
	}
	return newObj;
};
