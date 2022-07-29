/// get the sum of fractional numbers

const getTotalPrice = (arr) =>
	'$' +
	String(Math.floor(arr.reduce((sum, item) => sum + item, 0) * 100) / 100);

const a = [2, 5.32322, -212.5948, 0];
console.log(getTotalPrice(a));
