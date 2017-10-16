
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');



module.exports = merge(common, {
	devtool: 'source-map',
	plugins: [
        new UglifyJSPlugin({
        	sourceMap: true
        }),
        new webpack.DefinePlugin({
        	'process.env': {
        		'NODE_ENV': JSON.stringify('production')
        	}
        }),
		new HtmlWebpackPlugin({
			title: 'react docs',
			minify:{
				collapseWhitespace: true
			},
			hash: false,
			template: 'src/index.ejs',
			filename: 'index.html'
		})
    ]
});

// module.exports = {
// 	entry: './src/entry.js',
// 	output: {
// 		filename: 'handle.js',
// 		path: path.resolve(__dirname, 'dist')
// 	},
// 	devServer: {
// 		contentBase: path.join(__dirname, "dist"),
// 		compress: true,
// 		port: 9000
// 	},
// 	module: {
// 		rules: [
// 		{
// 			test: /\.js$/,
// 			exclude: /node_modules/,
// 			use: {
// 				loader: 'babel-loader',
// 				options: {
// 					presets: ['env']
// 				}
// 			}
// 		},
// 		{
// 			test: /\.html$/,
// 			use: {
// 				loader: 'html-loader'
// 			}
// 		},
// 		{
//             test: /\.scss$/,
//             use: [{
//                 loader: "style-loader"
//             }, {
//                 loader: "css-loader"
//             }, {
//                 loader: "sass-loader"
//             }]
//         }
// 		]
// 	},
//     plugins: [
//         new UglifyJSPlugin({
//         	sourceMap: true
//         }),
//         new webpack.DefinePlugin({
//         	'process.env': {
//         		'NODE_ENV': JSON.stringify('production')
//         	}
//         }),
// 		new HtmlWebpackPlugin({
// 			title: '停天下管理控制台',
// 			minify:{
// 				collapseWhitespace: true
// 			},
// 			hash: true,
// 			template: 'src/index.ejs',
// 			filename: 'index.html'
// 		})
//     ]
// };