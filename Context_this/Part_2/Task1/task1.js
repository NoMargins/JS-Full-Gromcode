export const event = {
	guests: [
		{ name: 'Tom', age: 16, email: 't@server.com' },
		{ name: 'Jack', age: 19, email: 'g@server.com' },
		{ name: 'Ann', age: 15, email: 'a@server.com' },
		{ name: 'Kate', age: 21, email: 'k@server.com' },
	],
	message: 'Welcome to the party!',
	getInvitations() {
		return this.guests
			.filter(({ age }) => age >= 18)
			.map(({ email, name }) => ({
				email,
				message: `Dear ${name}! ${this.message}`,
			}));
	},
};

console.log(event.getInvitations());
