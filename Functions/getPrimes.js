function getPrimes(n) {
	search: for (let i = 2; i <= n; i++) {
		for (let j = 2; j < i; j++) {
			if (i % j === 0) continue search;
		}

		console.log(i);
	}
}

getPrimes(9);
