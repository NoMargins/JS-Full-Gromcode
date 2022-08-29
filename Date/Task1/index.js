const daysNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

export const dayOfWeek = (date, days) => {
	const thisDay = new Date(date).getDate();
	const getDay = new Date(date).setDate(thisDay + days);
	return daysNames[new Date(getDay).getDay()];
};

const result = dayOfWeek(new Date(1983, 11, 23, 4), 14);
console.log(result);
