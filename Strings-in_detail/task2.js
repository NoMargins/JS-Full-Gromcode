// Let's sort the Phone Book by Name.
// The function has two arguments - the Contact Book and the parameter. which indicates wheather the sorting is ascending or descending (console.log - true or false accordingly);

const sortContacts = (contactBook, isAsc) => {
	if (!Array.isArray(contactBook)) {
		return null;
	}

	if (isAsc === false) {
		const result = contactBook.sort((a, b) => {
			return b.name.localeCompare(a.name);
		});
		return result;
	} else {
		const result = contactBook.sort((a, b) => {
			return a.name.localeCompare(b.name);
		});
		return result;
	}
};

const book = [
	{
		name: 'Igor',
		phone: '332 - 33 - 22',
	},
	{
		name: 'Olena',
		phone: '234 - 33 - 55',
	},
	{
		name: 'Alex',
		phone: '434 - 22 - 55',
	},
];

console.log(sortContacts(book, -2));
