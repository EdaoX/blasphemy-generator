var path = require('path');

module.exports = {
  entry: './web.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'public/js/_bundle.js'
  }
};