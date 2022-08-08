//let's rewrite the code:

var a = 17;

if (a) {
	var a = 1;

	console.log(a);
}

console.log(a);

// console should expose 1 first and then 17

let a = 17;

if (a) {
	let a = 1;
	console.log(a);
}

console.log(a);
