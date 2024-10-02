export default function uploadPhoto(filename) {
	return new Promise((resolve, reject) => {
		if (!filename) {
			resolve(filename)
		} else {
			reject(`$fileName cannot be processed`)
		}
	});
}
