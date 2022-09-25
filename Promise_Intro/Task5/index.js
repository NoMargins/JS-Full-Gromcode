import { addImage } from './addImage.js';

export const addImageV2 = (url) => {
	return new Promise((resolve, reject) => {
		addImage(url, (err, script) => {
			if (err) reject(err);
			else resolve(script);
		});
	});
};

// examples

addImageV2('https://server.com/image.png')
	.then((data) => console.log(data)) // ==> { width: 200, height: 100 }
	.catch((error) => console.log(error)); // ==> 'Image load failed'
