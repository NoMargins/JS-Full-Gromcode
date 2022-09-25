export const delay = (time) =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, time);
	});

delay(5000).then(() => console.log('Done'));
