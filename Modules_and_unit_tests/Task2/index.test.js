import importType from 'eslint-plugin-import/lib/core/importType';
import { getSquaredArray, getOddNumbers } from './calculator.js';
import getSum from './calculator.js';

it('if 2*2 = 4', () => {
	const result = getSquaredArray([1, 3, 2]);
	expect(result).toEqual([1, 9, 4]);
});

it('is there odd numbers', () => {
	const result = getOddNumbers([1, 2, 3, 4, 5]);
	expect(result).toEqual([1, 3, 5]);
});

it('is 2+3=5', () => {
	const result = getSum(2, 3);
	expect(result).toEqual(5);
});
