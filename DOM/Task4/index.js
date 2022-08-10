export const getTitle = () => {
	const res = document.querySelector('.title');
	return res.textContent;
};

export const getDescription = () => {
	const res = document.querySelector('.about');
	return res.innerText;
};

export const getPlans = () => {
	const res = document.querySelector('.plans');
	return res.innerHTML;
};

export const getGoal = () => {
	const res = document.querySelector('.goal');
	return res.outerHTML;
};
