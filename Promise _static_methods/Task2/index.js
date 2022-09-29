const getRandom = () => Math.floor(Math.random() * 2 + 1) * 1000;
const getRandomSeconds = getRandom();

const servers = [
	'https://server.com/us',
	'https://server.com/eu',
	'https://server.com/au',
];

const request = (url) =>
	new Promise((resolve) => {
		setTimeout(
			() =>
				resolve({
					userData: {
						name: 'Tom',
						age: 17,
					},
					source: url,
				}),
			getRandomSeconds
		);
	});

const getUserASAP = (userId) => {
	const userUrl = servers.map((server) => `${server}/users/${userId}`);
	const requests = userUrl.map((address) => request(address));

	return Promise.race(requests);
};

getUserASAP('user-123').then((res) => console.log(res));
