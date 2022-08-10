function User(name, age) {
	this.name = name;
	this.age = age;
}

User.prototype.sayHi = function () {
	console.log('Hi, I am ' + this.name);
};

User.prototype.requestNewPhoto = function () {
	console.log('New photo request was sent for ' + this.name);
};

User.prototype.setAge = function (age) {
	this.age = age;
	if (age >= 25) {
		console.log('New photo request was sent for ' + this.name);
	}
	if (age < 0) {
		return false;
	}
	return age;
};

const user1 = new User('Jimmy', 23);
const user2 = new User('Ann', 43);

console.log(user1.sayHi());
console.log(user1.requestNewPhoto());
