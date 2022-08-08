let result = 0;

export function getMemo() {
	return result;
}
export function add(inc) {
	result += inc;
}

export function decrease(dec) {
	result -= dec;
}

export function reset() {
	result = 0;
}

add(10);
decrease(7);
console.log(getMemo());
reset();
console.log(getMemo());
