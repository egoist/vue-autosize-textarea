var path = require('path')

module.exports = {
  entry: ['./src/app.js'],
  output: {
    path: path.resolve('.'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'] }
    ]
  },
  plugins: []
}
