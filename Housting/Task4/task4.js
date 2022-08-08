var foo = 1;

function bar() {
	if (!foo) {
		let foo = 10;
	}

	return foo;
}

foo = bar();
export default foo;

console.log(foo);
