// rewrite code with let and find the difference:

var arr = [];

for (let i = 0; i < 10; i += 1) {
	arr[i] = function () {
		return i;
	};
}

export { arr };

//console.log(arr[5]) = 10;

// correct code

let arr = [];

for (let i = 0; i < 10; i += 1) {
	arr[i] = function () {
		return i;
	};
}

export { arr };
