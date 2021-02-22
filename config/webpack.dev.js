const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const webpack = require('webpack');
const webpackConfig = {
	mode: 'development',
	plugins: {
		
	}
}
module.exports = merge(
	webpackConfig,
	commonConfig
)