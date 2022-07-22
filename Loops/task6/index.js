const n = 1;
const m = 1000;
let result = 1;
for (let i = n; i <= m; i++) {
	if (i % 2 === 1) {
		console.log('Found');
		result += i;
	} else if (result * 5 <= 5000) {
		console.log('Bigger');
	}
	console.log('Smaller or equal ');
}
console.log(result);
