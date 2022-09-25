const addImage = (imgSrc) => {
	const p = new Promise((resolved, rejected) => {
		const imgElem = document.createElement('img');
		imgElem.setAttribute('alt', 'my new image');
		imgElem.src = imgSrc;
		const containerElem = document.querySelector('.page');
		containerElem.append(imgElem);

		const onImageLoaded = () => {
			let { width, height } = imgElem;
			resolved({ width, height });
		};

		imgElem.addEventListener('load', onImageLoaded);
		imgElem.addEventListener('error', () => rejected('Image load is failed'));
	});
	return p;
};

const imgSrc =
	'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

const resultOfPromise = addImage(imgSrc);

function createNewElement(data) {
	const { width, height } = data;
	const sizeElem = document.querySelector('.image-size');
	return (sizeElem.textContent = `${width} x ${height}`);
}

resultOfPromise.then((data) => createNewElement(data));
resultOfPromise.catch((error) => console.log(error));

export { addImage };
