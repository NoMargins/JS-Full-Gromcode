// create the functions that will look for some numbers in the array

const getFiniteNumbers = (arr) => arr.filter((el) => Number.isFinite(el));

const getFiniteNumbersV2 = (arr) => arr.filter((el) => isFinite(el));

const getNaN = (arr) => arr.filter((el) => Number.isNaN(el));

const getNaNV2 = (arr) => arr.filter((el) => isNaN(el));

const getIntegers = (arr) => arr.filter((el) => Number.isInteger(el));

const a = [-0.76, 56.7676, -21.3, 3 / 10];
console.log(getFiniteNumbers(a));
console.log(getFiniteNumbersV2(a));
console.log(getNaN(a));
console.log(getNaNV2(a));
console.log(getIntegers(a));
