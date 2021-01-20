const randomColor = require('randomcolor'); // feed package randomcolor into constant variable
const chalk = require('chalk'); // feed package randomcolor into constant variable

const colorDisplay = randomColor({
  luminosity: process.argv[2],
  hue: process.argv[3],
});

console.log(chalk.hex(colorDisplay)('###############################'));
console.log(chalk.hex(colorDisplay)('###############################'));
console.log(chalk.hex(colorDisplay)('###############################'));
console.log(chalk.hex(colorDisplay)('#####                     #####'));
console.log(
  chalk.hex(colorDisplay)('#####       ' + colorDisplay + '       #####'),
);

console.log(chalk.hex(colorDisplay)('#####                     #####'));
console.log(chalk.hex(colorDisplay)('###############################'));
console.log(chalk.hex(colorDisplay)('###############################'));
console.log(chalk.hex(colorDisplay)('###############################'));
