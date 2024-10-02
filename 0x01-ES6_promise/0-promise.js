function getResponseFromAPI() {
	return new Promise((reject, resolve) => {
		const success = true;

		if (success) {
			resolve('API call successful');
		} else {
			reject('API call failed');
		}
	});
}
