const getCompanyNameElem = document.querySelector('.company-name');
const getCountElem = document.querySelector('.count');
const getAuthorNameElem = document.querySelector('.author-name');
const getAuthorMailElem = document.querySelector('.author-mail');
const getPageElem = document.querySelector('.page');

const getMostActiveDevs = (userID, repoID) => {
	return fetch(
		`https://api.github.com/repos/${userID}/${repoID}/commits?per_page=100`
	)
		.then((response) => response.json())
		.then((result) => {
			getCompanyNameElem.textContent = userID + '/' + repoID;
			let newArr = [];
			let finalArr = [];
			result
				.filter(({ commit }) => {
					const { author } = commit;
					const { date } = author;
					const dayNow = new Date();
					if (new Date(date) > dayNow.setDate(dayNow.getDate() - 7)) {
						return commit;
					}
				})
				.map((el) => {
					const { author, commit } = el;
					const authId = author.id;
					const { name, email } = commit.author;
					newArr.push({ id: authId, name, email });
				});
			let res = newArr.reduce((acc, el) => {
				let elName = el.name;
				let elEmail = el.email;
				return typeof acc[el.id] != 'undefined'
					? { ...acc, [el.id]: acc[el.id] + 1 }
					: { ...acc, [el.id]: 1 };
			}, {});

			const finalRes = Object.entries(res)
				.sort((a, b) => b[1] - a[1])
				.map((el) => {
					for (let obj of newArr) {
						if (Number(el[0]) === obj.id) {
							el.push(obj.name, obj.email);
							el.splice(4, el.length - 1);
						}
					}
					return el;
				});

			const theVeryLastRes = finalRes.map((el) => {
				el.splice(0, 1);
				const [count, name, email] = el;
				return (el = {
					count,
					name,
					email,
				});
			});

			theVeryLastRes.splice(12, theVeryLastRes.length - 1);

			console.log(theVeryLastRes);
		});
};

getMostActiveDevs('apple', 'swift');
