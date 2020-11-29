
const path = require('path');
module.exports = {
  entry: './index.js',
  output: {
  	libraryTarget: "commonjs",
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  externals: {
    react: "react"
  },
  module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
};