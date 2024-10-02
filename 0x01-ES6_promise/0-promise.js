function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
		const success = true;

		if (success) {
			resolve('API call successful');
		} else {
			reject('API call failed');
		}
	});
}

export default getResponseFromAPI;
