const Glob = require('glob');
const path = require('path');
const chalk = require('chalk');

module.exports = function () {
  const entries = {};
  const parttenJS = path.join(__dirname, '../src/**/index.js');
  const parttenTS = path.join(__dirname, '../src/**/index.ts');
  try {
    console.log(chalk.blue('build components entries start'));
    Glob.sync(parttenJS, {}).forEach((file) => {
      if (file.indexOf('src/index.js') >= 0) {
        entries['zarm-vue.common'] = file;
      } else {
        const pathArray = file.split('/');
        const key = pathArray[pathArray.length - 2];
        console.log(chalk.yellow(`${key}: ${file}`));
        entries[key] = file;
      }
    });
    Glob.sync(parttenTS, {}).forEach((file) => {
      const pathArray = file.split('/');
      const key = pathArray[pathArray.length - 2];
      console.log(chalk.yellow(`${key}: ${file}`));
      entries[key] = file;
    });
    console.log('');
    return entries;
  } catch (err) {
    throw new Error(err.message);
  }
};
