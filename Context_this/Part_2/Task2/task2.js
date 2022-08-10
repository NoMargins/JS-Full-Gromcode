export const wallet = {
	transactions: [1, 5, 232, 65],
	getMax() {
		return Math.max(...this.transactions);
	},
	getMin() {
		return Math.min(...this.transactions);
	},
};

console.log(wallet.getMax());
console.log(wallet.getMin());