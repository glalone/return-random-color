const randomColor = require('randomcolor'); // feed package randomcolor into constant variable
const chalk = require('chalk'); // feed package randomcolor into constant variable

// I used 'color.js' for the code, i switched it to index.js
const colorDisplay = randomColor({
  luminosity: process.argv[3],
  hue: process.argv[2],
});

// new code with one Unique console.log()
console.log(
  chalk.hex(colorDisplay)(`
###############################
###############################
###############################
#####                     #####
#####       ${colorDisplay}       #####
#####                     #####
###############################
###############################
###############################
`),
);
