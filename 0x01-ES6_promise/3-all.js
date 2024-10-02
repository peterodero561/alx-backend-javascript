import { uploadPhoto, createUser } from './utils.js'

function handleProfileSignup() {
	return Promise.all([uploadPhoto(), createUser()])
	.then((results) => {
		const {body} = result[0];
		const {firstName, lastName} = result[1];
		console.log(`${body} ${firstName} ${lastName}`);
	})
	.catch(() => {
		console.log('Signup system offline');
	});
}

export default handleProfileSignup;
