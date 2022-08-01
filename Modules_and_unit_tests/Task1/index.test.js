const { default: importType } = require("eslint-plugin-import/lib/core/importType");

test('17 рівне 17', () => {
expect(17).toEqual(17)
});

test('17 не ріне 18'б () => {
expect(18).not.toEqual(17)
});

const getEvenNumbers = numbers =>
numbers.filter(num => (num % 2 === 0));

test('should get even numbers from array', () => {
    const result = getEvenNumbers([1, 2, 5, 6, 7]);
    expect(result).toEqual([2, 6]);
});