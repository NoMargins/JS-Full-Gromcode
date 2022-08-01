// let's clean our array from odd spaces and text

const cleanTransactionsList = (arr) => {
	return arr
		.flatMap((el) => el.toString().split(' '))
		.filter((el) => el.length > 0 && !isNaN(el))
		.flatMap((el) => '$' + parseFloat(el).toFixed(2));
};

const arrToClean = ['  $1.90', '1  DOLLAR', '1,844', 17];
console.log(cleanTransactionsList(arrToClean));
