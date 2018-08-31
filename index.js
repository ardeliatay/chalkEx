var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World") + chalk.blue.bgRed.bold('Hello world!') + `
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`;

const error = chalk.bold.red;
const warning = chalk.keyword('orange');

const name = 'Sindre';
console.log(chalk.green('Hello %s'), name);

console.log(error('Error!'));
console.log(warning('Warning!'));

console.log(message);