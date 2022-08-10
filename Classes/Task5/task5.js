/* eslint-disable max-classes-per-file */

export class User {
	constructor(id, name, sessionId) {
		this._id = Object.freeze(id);
		this._name = Object.freeze(name);
		this._sessionId = Object.freeze(sessionId);
	}

	get id() {
		return this._id;
	}
	get name() {
		return this._name;
	}
	get sessionId() {
		return this._sessionId;
	}
}

export class UserRepository {
	constructor(users) {
		this._users = Object.freeze(users);
	}

	get users() {
		return this._users;
	}

	getUserNames() {
		return this._users.map((user) => user.name);
	}

	getUserIds() {
		return this._users.map((user) => user.id);
	}

	getUserNameById(id) {
		return this._users
			.filter((user) => user.id === id)
			.map((el) => el.name)
			.pop();
	}
}
// examples
const user = new User('1', 'Tom', 'session-id');

// получить свойства можем
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует