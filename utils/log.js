const chalk = require('chalk')

module.exports = (txt, color) => {
    console.log()
    console.log(chalk[color](txt))
    console.log()
}