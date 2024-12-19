// Displaying Welcome message
process.stdout.write('Welcome to ALX, what is your name?\n');

// Read input from user
process.stdin.on('data', (data) => {
	const name = data.toString().trim();
	process.stdout.write(`Your name is: ${name}\n`);
});

process.on('exit', () => {
	console.log("This important software is now closing")
});
