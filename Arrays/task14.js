//function that returns first n elements of array

const getSubArray = (arr, numberOfElements) => {
	let subArray = arr.slice();
	subArray.length = numberOfElements;
	return subArray;
};
