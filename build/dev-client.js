/* eslint-disable */
require('eventsource-polyfill');
var hotClient = require('webpack-hot-middleware/client?path=/__webpack_hmr&noInfo=true&reload=true&timeout=10000');

hotClient.subscribe(function(event) {
  if (event.action === 'reload') {
    window.location.reload();
  }
});
