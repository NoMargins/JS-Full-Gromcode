export class User {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	sayHi() {
		console.log('Hi, I am ' + this.name);
	}
	requestNewPhoto() {
		console.log('New photo request was sent for ' + this.name);
	}
	setAge(newAge) {
		this.age = newAge;
		if (newAge >= 25) {
			console.log(this.requestNewPhoto());
		}
		if (newAge < 0) {
			return false;
		}
		return newAge;
	}
	static createEmpty() {
		const newUser = new User('', null);
		console.log(`name: ${newUser.name}, age: ${newUser.age}`);
		return newUser;
	}
}

const user1 = new User('Adolph', 26);
/* console.log(user1.sayHi());
 */
/*  console.log(user1.requestNewPhoto());
 */
console.log(user1.setAge(-7));
