const user = {
	firstName: 'John',
	lastName: 'Doe',
	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	},
	set fullName(expr) {
		const [firstName, lastName] = expr.split(' ');
		this.firstName = firstName;
		this.lastName = lastName;
	},
};

export { user as default };
