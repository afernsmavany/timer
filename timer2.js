const stdin = process.stdin;
const stdout = process.stdout;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');
​
stdin.on('data', (key) => {
  if (key === "b") {
    stdout.write('\x07');
  }
  if (key >= 1 && key <= 9) {
    stdout.write(`Setting timer for ${key} seconds`);
    setTimeout(() => {
      stdout.write('\x07');
    }, key * 1000);
  }
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    stdout.write("Thanks for using me, ciao!");
    process.exit();
  }
});