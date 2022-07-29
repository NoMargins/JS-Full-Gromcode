// jet props of objects included in array

const getPeople = (obj) => {
	let newArray = [];
	return (nameArray = Object.entries(obj)
		.flatMap((element) => element[1])
		.map((element) => element.name));
};

const rooms = {
	room1: [
		{
			name: 'Jack',
		},
		{
			name: 'Andrey',
		},
		{
			name: 'Ann',
		},
		{
			name: 'Vasyl',
		},
	],
	room2: [
		{
			name: 'Dan',
		},
	],
	room3: [
		{
			name: 'Lilia',
		},
		{
			name: 'Kate',
		},
	],
};

console.log(getPeople(rooms));
