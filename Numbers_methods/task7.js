// // rounding numbers in different ways encounting precice numbers after the dot

const superRound = (num, prec) => {
	let result = [];
	return (result = [
		Math.floor(num * Math.pow(10, prec)) / Math.pow(10, prec),
		Math.trunc(num * Math.pow(10, prec)) / Math.pow(10, prec),
		Math.ceil(num * Math.pow(10, prec)) / Math.pow(10, prec),
		Math.round(num * Math.pow(10, prec)) / Math.pow(10, prec),
		+num.toFixed(prec),
	]);
};
