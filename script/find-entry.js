const Glob = require('glob');
const path = require('path');

module.exports = function () {
  const entries = {};
  const partten = path.join(__dirname, '../src/**/index.js');
  try {
    Glob.sync(partten, {}).forEach((file) => {
      if (file.indexOf('src/index.js') >= 0) {
        entries.index = file;
      } else {
        const pathArray = file.split('/');
        const key = pathArray[pathArray.length - 2];
        entries[key] = file;
      }
      console.log(entries);
    });
    return entries;
  } catch (err) {
    throw new Error(err.message);
  }
};
