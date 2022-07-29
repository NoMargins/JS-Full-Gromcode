// filter method - leave only the numbers which / 3

const getSpecialNumbers = (array) => array.filter((num) => num % 3 === 0);

console.log(getSpecialNumbers([2, 3, 5, 6, 7, 9]));
