// create the functions that will be parsing the numbers in the array

const getParsedIntegers = (arr) => arr.map((el) => Number.parseInt(el));

const getParsedIntegersV2 = (arr) => arr.map((el) => parseInt(el));

const getParsedFloats = (arr) => arr.map((el) => Number.parseFloat(el));

const getParsedFloatsV2 = (arr) => arr.map((el) => parseFloat(el));

const a = ['-1.76text', '  56.7676 is text', -21.3, 3 / 10];
console.log(getParsedIntegers(a));
console.log(getParsedIntegersV2(a));
console.log(getParsedFloats(a));
console.log(getParsedFloatsV2(a));
