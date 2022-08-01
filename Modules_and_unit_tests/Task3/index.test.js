import { getMax } from './getMinSquaredNumber.js';

it('if the array is empty', () => {
	const result = getMax([]);
	expect(result).toEqual(null);
});

it('if the array is string', () => {
	const result = getMax(['Abcdefghijklmp op']);
	expect(result).toEqual(NaN);
});

it('if the array is good', () => {
	const result = getMax([-777, 3, -2, 6, 45, -20]);
	expect(result).toEqual(4);
});
