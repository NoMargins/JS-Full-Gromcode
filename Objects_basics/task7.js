// chech the values of the object for some critireas and record them to the new object

const getAdults = (obj) => {
	let newObj = {};
	for (let key in obj) {
		if (obj[key] >= 18) {
			newObj[key] = obj[key];
		}
	}
	return newObj;
};

// examples
getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }); // ==> { 'John Doe': 19, Bob: 18 }
getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }
