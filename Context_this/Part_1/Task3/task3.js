export function defer(func, ms) {
	return function () {
		setTimeout(() => func.call(this, ...arguments), ms);
	};
}

const user = {
	name: 'Tom',
	sayHi() {
		console.log("Hi there! I'm ${this.name}!");
	},
};

const deferredHi = defer(user.sayHi, 1000);

console.log(deferredHi.call({ name: 'Bob' }));
