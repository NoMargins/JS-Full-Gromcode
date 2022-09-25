function getRandomArbitrary() {
	return Math.floor(Math.random() * (4 - 1) + 1);
}

const requestUserData = (userId, callback) => {
	const userEmail = `${userId}@example.com`;
	const userData = {
		userId: `${userId}`,
		email: `${userEmail}`,
	};
	const checkData = () => {
		callback(null, userData);
	};
	const time = getRandomArbitrary();

	setTimeout(() => {
		checkData();
	}, time * 1000);
};

const onDataLoaded = (error, userData) => {
	let { userId, email } = userData;
	error = userId === 'broken';
	if (error) {
		console.log('Failed to load user data');
		return;
	} else {
		console.log(userData);
	}
};

requestUserData('lklkj', onDataLoaded);
