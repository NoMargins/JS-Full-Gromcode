function getSection(num) {
	const findSpan = document.querySelector(`[data-number="${num}"]`);
	const findParent = findSpan.closest('.box');
	return findParent.getAttribute('data-section');
}
