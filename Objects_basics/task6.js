// find elements of array in object and record them to the new object

// 1 - way 1
const pickProps = (obj, props) => {
	let newObj = {};
	for (let key in obj) {
		for (let el of props) {
			if (key === el) {
				newObj[key] = key;
			}
		}
	}
	return newObj;
};

// 2 - way 2
const pickProps = (obj, props) => {
	let newObj = {};
	for (let key in obj) {
		if (props.includes(key)) {
			newObj[key] = obj[key];
		}
	}
	return newObj;
};
