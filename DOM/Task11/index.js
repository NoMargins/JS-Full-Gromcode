// put your code here
export const manageClasses = () => {
	const findOne = document.querySelector('.one');
	findOne.classList.add('selected');
	const findTwo = document.querySelector('.two');
	findTwo.classList.remove('selected');
	const findThree = document.querySelector('.three');
	findThree.classList.toggle('three_done');
	const findFour = document.querySelector('.four');
	if (findFour.classList.contains('some-class')) {
		findFour.classList.add('another-class');
	}
};
