/* eslint-disable prefer-arrow-callback */

process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
  // Process input
  const data = process.stdin.read();

  if (data) {
    // Output result to stdout
    process.stdout.write(`Your name is: ${data}`);
  }
});

process.stdin.on('end', function display() {
  // Do this on EOF from other commands
  process.stdout.write('This important software is now closing\n');
});