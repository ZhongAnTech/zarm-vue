const Glob = require('glob');
const path = require('path');
const chalk = require('chalk');

module.exports = function () {
  const entries = {};
  const partten = path.join(__dirname, '../src/**/style/component.js');
  try {
    console.log(chalk.blue('build components theme css start'));
    Glob.sync(partten, {}).forEach(file => {
      const pathArray = file.split('/');
      const key = pathArray[pathArray.length - 3];
      console.log(chalk.yellow(`${key}: ${file}`));
      entries[key] = file;
    });
    console.log('');
    return entries;
  } catch (err) {
    throw new Error(err.message);
  }
};
