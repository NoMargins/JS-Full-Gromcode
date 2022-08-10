// task: create Wallet to be able to deposit & withdraw

// 1. create & export class by Wallet name
// 2. create constructor of  Wallet with balance = 0 by default
// 3. create getBalance() and return current balance
// 4. create deposit(amount) => balance+=amount
// 5. create withdraw(amount) => balance-=amount
//  5.1 if amount > balance => console.log('No enough funds')

export class Wallet {
	constructor() {
		this.balance = 0;
	}

	getBalance() {
		return this.balance;
	}
	deposit(amount) {
		this.balance += amount;
	}
	withdraw(amount) {
		if (amount > this.balance) {
			console.log('No enough funds');
			return;
		}
		this.balance -= amount;
	}
}

const newBalance = new Wallet();
console.log(newBalance.getBalance());

newBalance.deposit(76);
console.log(newBalance.getBalance());
newBalance.withdraw(65);
console.log(newBalance.getBalance());
newBalance.withdraw(11);
console.log(newBalance.getBalance());
newBalance.withdraw(6);
