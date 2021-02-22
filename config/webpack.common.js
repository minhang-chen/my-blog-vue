// 公共的webpack的公共配置
const path = require('path'); // node的基本包，用来处理路径
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ENV_IS_DEV = process.env.NODE_ENV === 'development';
const HtmlWebpackPlugin = require('html-webpack-plugin');

// __dirname表示文件相对于工程的路径
module.exports = {
	entry: path.join(__dirname, '../src/index.js'),
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, '../dist')
	},
	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: `css/initial.[name].css`
		}),
		new HtmlWebpackPlugin({
            template: './src/index.html',
        })
	],
	module: {
		rules: [
			{
				// 通过vue-loader来识别vue文件
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.(css|scss)$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'sass-loader',
				]
			},
			{
				test: /\.(gif|png|jpg|svg|eot|ttf|woff|woff2)$/,
				loader: 'url-loader',
				options: {
					limit: 20000, // 图片大小
					name: '[name].[ext]' // 文件名称
				}
			}
		]
	},
	devServer: {
			
	}
}