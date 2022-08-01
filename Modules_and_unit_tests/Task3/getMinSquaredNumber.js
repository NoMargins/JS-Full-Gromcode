export const getMax = (arr) => {
	if (!Array.isArray(arr) || arr.length === 0 || !isNaN(arr)) {
		return null;
	}
	let min = Math.min(Math.abs(...arr));
	return min * min;
};
