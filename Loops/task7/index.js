const start = 0;
const end = 1000;
let result = 0;

for (let i = start; i <= end; i++) {
	result += i;
}
let div = result / 1234;
let mod = result % 1234;
console.log(div > mod);
