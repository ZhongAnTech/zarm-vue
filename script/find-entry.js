const Glob = require('glob');
const path = require('path');

// const getComponentsEntry = function () {
//   return path.join(__dirname, '../src/components.js');
// };

module.exports = function () {
  const entries = {};
  // entries['index'] = getComponentsEntry()
  const partten = path.join(__dirname, '../src/**/index.js');
  try {
    Glob.sync(partten, {}).forEach((file) => {
      if (file.indexOf('src/index.js') >= 0) {
        entries['zarm-vue.common'] = file;
      } else {
        const pathArray = file.split('/');
        const key = pathArray[pathArray.length - 2];
        entries[key] = file;
      }
    });
    console.log(`build components start`);
    return entries;
  } catch (err) {
    throw new Error(err.message);
  }
};
