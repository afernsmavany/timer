let args = process.argv.slice(2);
for (times of args) {
if (times > 0) {}
setTimeout(() => {
  process.stdout.write('\x07');
}, times * 1000);
};




