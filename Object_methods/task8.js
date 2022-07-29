// let's add new key and property to the object by 4 different ways

// 1st way
const addPropertyV1 = (obj, key, value) => {
	obj[key] = value;
	return obj;
};

// 2nd way
const addPropertyV2 = (obj, key, value) => {
	const secondObj = {};
	secondObj[key] = value;
	const addObj = Object.assign(obj, secondObj);
	return addObj;
};

// 3rd way
const addPropertyV3 = (obj, key, value) => {
	const newAddProp = Object.assign({}, obj);
	newAddProp[key] = value;
	return newAddProp;
};

// 4th way
const addPropertyV4 = (obj, key, value) => {
	const addPropCopy = { ...obj };
	addPropCopy[key] = value;
	return addPropCopy;
};

// examples
const transaction = {
	value: 170,
};
console.log(addPropertyV1(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
console.log(addPropertyV2(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
console.log(addPropertyV3(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
console.log(addPropertyV4(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
