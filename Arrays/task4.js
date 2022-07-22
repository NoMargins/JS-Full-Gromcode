function swap(numbers) {
	const [a, ...rest] = numbers;
	return [...rest, a];
}

//or

function swapManual(numbers) {
	let copiedArray = numbers.slice();
	const firstChild = copiedArray.shift();
	copiedArray.push(firstChild);
	return copiedArray;
}

// examples
swap([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
swapManual([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
