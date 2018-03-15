'use strict'
process.env.NODE_ENV = 'production';

const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const config = {
	entry: {
		index: ['./src/index.js'],
		// style: './src/assets/sass/style.scss',
		vendor: ['react', 'react-dom', 'react-router', 'react-router-dom', 'react-router-config'],
		
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'api/[name].js',
		publicPath: './',
		chunkFilename:'api/[name].chunk.js',
	},
	
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ["react", "env", "stage-2"],
						//plugins: ['transform-runtime']//https://babeljs.io/docs/plugins/transform-runtime/
					}
				}
			},
			{
				test: /\.html?$/,
				use: {
					loader: 'html-loader'
				}
			},
			{
				test: /\.md?$/,
				use: {
					loader: 'html-loader'
				}
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1
							}
						}
					]

				})

			},
			{
				test: /\.scss?$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: [require('autoprefixer')({
									broswers: ['last 3 version', 'ie >= 10']
								})]
								
							}
						},
						{
							loader: 'sass-loader',

						}]

				})
			},
			{
				test: /\.(woff|svg|eot|ttf)\??.*$/,
				use: {
					loader: 'url-loader'
				}

			},
			{
				test: /\.(png|gif|jpg)$/,
				use: {
					loader: 'url-loader',
					options: {
						name: './assets/images/[name].[ext]',
						limit: 100
					}
				}

			}



		]
	},
	resolve: {
		alias: {
			Src: path.resolve(__dirname, './src'),
			Javascript: path.resolve(__dirname, './src/javascript')
			// Images: path.resolve(__dirname, './src/assets/images'),
			// Components: path.resolve(__dirname, './src/app/components'),
			// Util: path.resolve(__dirname, './src/app/util')

		},
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'api/[name].css',//https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/27
			allChunks: true,
			ignoreOrder: false,
			disable: false
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'api/vendor.bundle.js'//gave the chunk a different name
		}),
		


		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: __dirname + '/src/index.html',
			inject: true,
			chunks: ['vendor', 'index'],//会自动将js文件插入html中
			chunksSortMode: 'dependency',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true,
			},
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				// Disabled because of an issue with Uglify breaking seemingly valid code:
				// https://github.com/facebookincubator/create-react-app/issues/2376
				// Pending further investigation:
				// https://github.com/mishoo/UglifyJS2/issues/2011
				// comparisons: false,
			},
			output: {
				comments: false,
				// Turned on because emoji and regex is not minified properly using default
				// https://github.com/facebookincubator/create-react-app/issues/2488
				ascii_only: true,
			},
			sourceMap: true,
		})

	]

}

module.exports = config;


