const Glob = require('glob');
const path = require('path');

module.exports = function () {
  const entries = {};
  const partten = path.join(__dirname, '../src/**/component.js');
  try {
    Glob.sync(partten, {}).forEach(file => {
      const pathArray = file.split('/');
      const key = pathArray[pathArray.length - 3];
      entries[key] = file;
    });
    console.log('build component css start');
    return entries;
  } catch (err) {
    throw new Error(err.message);
  }
};
