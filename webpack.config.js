const path = require('path');

module.exports = {
  mode: "development", // as opposed to `production` which obfuscates namespaces
  entry: path.join(__dirname, "/client/source/index.jsx"),
  output: {
    path: path.join(__dirname, "/client/dist"),
    filename: "bundle.js",
  },
  devtool: "source-map", // creates a file to relate compiled code to source code for debugging use
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ]
  },
}
