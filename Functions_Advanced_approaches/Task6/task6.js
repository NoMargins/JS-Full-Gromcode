// let's find the max number in the Fibonacci's array that doesn't exceed the given number

function fib(numb) {
	let a = 0;
	let b = a + 1;
	let arr = [a, b];
	let c;
	do {
		c = a + b;
		arr.push(c);
		a = b;
		b = c;
	} while (c <= numb);

	return arr[arr.length - 1];
}
console.log(fib(54));
