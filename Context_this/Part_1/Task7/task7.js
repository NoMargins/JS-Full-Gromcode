export const user = {
	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	},
	setFullName(str) {
		const partOfName = str.split(' ');
		this.firstName = partOfName[0];
		this.lastName = partOfName[1];
	},
};

const name = 'John Doe';
user.setFullName(name);
console.log(user.firstName);
console.log(user.lastName);
console.log(user);
console.log(user.getFullName());
