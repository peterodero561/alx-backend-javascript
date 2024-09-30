export default function returnHowManyArguments(...params) {
	let i = 0;
	for (let x of params) {
		i += 1;
	}
	return i;
}
