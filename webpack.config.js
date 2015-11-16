var LiveReloadPlugin = require('webpack-livereload-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
	resolve: {
		extensions: ['', '.ts', '.js']
	},

	plugins: [
		new LiveReloadPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],

	entry: './app/main.ts',
	output: {
		path: path.join(__dirname, 'dist'),
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
		contentBase: 'app'
	}
};
