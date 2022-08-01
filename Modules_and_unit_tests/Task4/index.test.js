import importType from 'eslint-plugin-import/lib/core/importType';
import { calc } from './calculator.js';

it('does plus work', () => {
	const result = calc('1 + 3');
	expect(result).toEqual('1 + 3 = 4');
});

it('does minus work', () => {
	const result = calc('1 - 3');
	expect(result).toEqual('1 - 3 = -2');
});

it('does multiply work', () => {
	const result = calc('2 * 3');
	expect(result).toEqual('2 * 3 = 6');
});

it('does split work', () => {
	const result = calc('6 / 2');
	expect(result).toEqual('6 / 2 = 3');
});
