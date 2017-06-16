var webpack = require('webpack');
var path = require('path');

module.exports = {
	/*
	resolve: {
		alias: {
			jquery: "jquery/src/jquery"
		}
	},
	*/
	resolve: {
		modules: [
			path.join(__dirname, "node_modules"),
			"node_modules"
		]
	},
	/*
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})
	],
	*/
	module: {
		rules: [
			{
				test: /\.(scss)$/,
				use: [
					// inject CSS to page
					{ loader: 'style-loader' },
					// translates CSS into CommonJS modules
					{ loader: 'css-loader' },
					{
						loader: 'postcss-loader', // Run post css actions
						options: {
							plugins: function () { // post css plugins, can be exported to postcss.config.js
								return [
									require('precss'),
									require('autoprefixer')
								];
							}
						}
					},
					// compiles SASS to CSS
					{ loader: 'sass-loader' }
				]
			},
		]
	}
};
