var LiveReloadPlugin = require('webpack-livereload-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
	resolve: {
		extensions: ['', '.ts', '.js']
	},

	plugins: [
		new LiveReloadPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	],

	entry: './app/src/main.ts',

	output: {
		path: path.join(__dirname, 'app/dist'),
		publicPath: 'dist/',
		filename: 'app.js'
	},

	devtool: 'source-map',

	module: {
		loaders: [
			{
				test: /\.ts$/,
				loader: 'ts-loader'
			}
		]
	},

	devServer: {
		contentBase: 'app/'
	}
};
