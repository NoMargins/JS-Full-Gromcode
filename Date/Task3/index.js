const getDiff = (startDate, endDate) => {
	const start = new Date(startDate);
	const end = new Date(endDate);
	const diff = Math.abs(end - start);
	const getHours = new Date(diff).getHours();
	const getMinutes = new Date(diff).getMinutes();
	const getSeconds = new Date(diff).getSeconds();
	const days = Math.floor(diff / 1000 / 60 / 60 / 24);
	return `${days}d ${getHours}h ${getMinutes}m ${getSeconds}s`;
};

getDiff(2012 - 12 - 22, 2012 - 12 - 21);
