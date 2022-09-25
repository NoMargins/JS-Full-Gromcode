export const addImage = (imgSrc, callback) => {
	const newImage = document.createElement('img');
	newImage.setAttribute('alt', 'my new image');
	newImage.src = imgSrc;
	const containerElem = document.querySelector('.page');
	containerElem.append(newImage);

	const onImageLoaded = () => {
		const { width, height } = newImage;
		callback(null, { width, height });
	};

	newImage.addEventListener('load', onImageLoaded);
	newImage.addEventListener('error', () => console.log('Image load is failed'));
};

// callack function
const onImageLoaded = (error, imgElem) => {
	if (error) {
		console.log(error);
		return;
	}

	const { width, height } = imgElem;
	const sizeElem = document.querySelector('.image-size');

	return (sizeElem.textContent = `${width} x ${height}`);
};

const imgSrc =
	'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

addImage(imgSrc, onImageLoaded);
