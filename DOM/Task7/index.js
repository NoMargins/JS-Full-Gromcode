export const clearList = () => {
	const res = document.querySelector('.categories');
	return (res.innerHTML = '');
};
