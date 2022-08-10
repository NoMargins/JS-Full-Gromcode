export const getItemsList = () => {
	const elementsList = document.querySelectorAll('.technology');
	console.dir(elementsList);
	return elementsList;
};

export const getItemsArray = () => {
	const array = document.querySelectorAll('.tool');
	const elementsArray = Array.from(array);
	console.log(elementsArray);
	return elementsArray;
};
