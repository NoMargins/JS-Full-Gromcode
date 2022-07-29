// encrease the even numbers on delta


function increaseEvenEl(arr, delta) {
    let newArray = [];
    if (!Array.isArray(arr)) {
        return null;
    }
    else {
        arr
        .filter((num) => num % 2 === 0;)
		.map((num) => num + delta);
    }
}
