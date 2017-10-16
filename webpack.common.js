const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		app: './src/entry.js'
	},
	output: {
		filename: 'static/js/[hash:8].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['env']
				}
			}
		},
		{
			test: /\.html$/,
			use: {
				loader: 'html-loader'
			}
		},
        {
        	test: /\.(woff2|woff|ttf|eot|svg|otf)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        	use: [
        	{
        		loader: 'url-loader?limit=100&name=fonts/[name].[ext]',
        		options: {}
        	}
        	]
        },
		{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
            	fallback: "style-loader",
            	use: "css-loader"
            })
        }
		]
	},
	plugins: [
		new ExtractTextPlugin("static/css/[hash:8].css"),
	    new CleanWebpackPlugin(['dist'])
    ]
};