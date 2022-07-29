// let's copy the object without changing it

const users = {
	'John Doe': 19,
	Tom: 17,
	Bob: 20,
};

// 1st way:
const copyUsers = Object.assign({}, users);

//2nd way:
const copyObj = { ...users };

//3rd way:
const copyObj = (obj) => Object.assign({}, obj);

console.log(copyUsers);
