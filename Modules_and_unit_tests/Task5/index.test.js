import importType from 'eslint-plugin-import/lib/core/importType';
import { reverseArray, withdraw, getAdults } from './index.js';

it('if array is a string', () => {
	const result = reverseArray('I am a string array');
	expect(result).toEqual(null);
});

it('if array is not empty', () => {
	const result = reverseArray([]);
	expect(result).toEqual(null);
});

it('if array consists negative numbers', () => {
	const result = reverseArray([-78, 87, 4, 8]);
	expect(result).toEqual([8, 4, 87, -78]);
});

it('if the balance is negative', () => {
	const result = withdraw(
		['Ann', 'Billy', 'Susan'],
		[-89, -90, -54, -67],
		'Ann',
		89
	);
	expect(result).toEqual(-1);
});

it('if the balance is not negative', () => {
	const result = withdraw(
		['Ann', 'Billy', 'Susan'],
		[89, -90, -54, -67],
		'Ann',
		89
	);
	expect(result).toEqual([0, -90, -54, -67]);
});

it('if the user is not find', () => {
	const result = withdraw(
		['Ann', 'Billy', 'Susan'],
		[89, -90, -54, -67],
		'John',
		89
	);
	expect(result).toEqual(undefined);
});

it('if the object is empty', () => {
	const result = getAdults({});
	expect(result).toEqual({});
});

it('if the object is ok', () => {
	const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
	expect(result).toEqual({ Bob: 18, 'John Doe': 19 });
});

it('if the values are empty', () => {
	const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: '' });
	expect(result).toEqual({ 'John Doe': 19 });
});
