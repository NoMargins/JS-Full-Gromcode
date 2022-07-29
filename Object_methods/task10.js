// compate 2 objects by their props

// way 1st

function compareObjects(firstObj, secondObj) {
	const props1 = Object.entries(firstObj);
	const props2 = Object.entries(secondObj);
	if (props1.length !== props2.length) {
		return false;
	}
	for (let i = 0; i < props1.length; i += 1) {
		const prop = props1[i];
		if (props2[i].includes(prop)) {
			return true;
		} else {
			return false;
		}
	}

	return true;
}

// way 2nd

// examples
const obj1 = {
	name: 'Tom',
	age: 17,
};

const obj2 = {
	name: 'Bob',
	age: 17,
};

const obj3 = {
	name: 'Bob',
	age: 17,
	student: false,
};

const obj4 = {
	name: 'Tom',
	age: 17,
};

const obj5 = {
	age: 17,
	name: 'Tom',
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
console.log(compareObjects(obj4, obj5)); // ==> true
