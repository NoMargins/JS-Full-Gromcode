// how to add an property in object by 4 different ways

const addPropertyV1 = (userData, userId) => {
	userData.id = userId;
	return userData;
};
const addPropertyV2 = (userData, userId) => {
	userData.id = userId;
	return Object.assign(userData);
};
// put your code here
const addPropertyV3 = (userData, userId) => {
	const copyObj = Object.assign({}, userData);
	copyObj.id = userId;
	return copyObj;
};
// put your code here
const addPropertyV4 = (userData, userId) => {
	const spredObj = { ...userData };
	spredObj.id = userId;
	return spredObj;
};
// examples
const user = {
	name: 'Sam',
};
console.log(addPropertyV1(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
console.log(addPropertyV2(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
console.log(addPropertyV3(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
console.log(addPropertyV4(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
