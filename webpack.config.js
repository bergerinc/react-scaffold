const path = require('path');

module.exports = {
  entry: './src/app/app.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module:{
    rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/react", "@babel/env"]
          }
				}
			},
			{ 
				test:/\.(s*)css$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			}

		]
  }

}