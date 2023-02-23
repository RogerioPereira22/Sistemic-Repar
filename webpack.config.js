const path = require('path');

module.exports = {
  mode: 'development',
  entry: 'dist/server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
  },
};