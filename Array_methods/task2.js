// unsorted array => sorted array

const sortDesc = (array) => array.slice().sort((a, b) => a - b);

console.log(sortDesc([2, 3, 5, 6, 7, 9]));
