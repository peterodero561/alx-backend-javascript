export default function divideFunction(numerator, denominator) {
	return new Promise((resolve, reject) => {
		if (numerator !== 0 && denominator !== 0) {
			resolve(numerator / denominator);
		} else {
			reject(new Error("cannot divide by 0"))
		}
	});
}
