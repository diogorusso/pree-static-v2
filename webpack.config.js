var path = require('path'),
	webpack = require('webpack'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	VendorChunkPlugin = require('webpack-vendor-chunk-plugin');

module.exports = {
	entry: {
	  app: "./main.js",
	  vendor: ['jquery','underscore','backbone','backbone.marionette','bootstrap-webpack'],
	},
	output: {
		path: '',
		filename: 'script.js'
	},


	devtool: 'cheap-module-eval-source-map',
	/* 
		A source map provides a way of mapping code within 
		a compressed file back to it’s original position 
		in a source file. 
	*/
	//watch: true,
	//keepalive: true,

	module: {
		loaders: [
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					//default config
					'file?hash=sha512&digest=hex&name=[hash].[ext]',
					'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
				]
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader?sourceMap'),
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap'),
				exclude: /node_modules/
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\/.+\.(jsx|js)$/,
				//expect that this is the global context.
				loader: 'imports?jQuery=jquery,$=jquery,this=>window',
				exclude: /node_modules/
			},

			{
                test: /bootstrap\/js\//,
                loader: 'imports?jQuery=jquery'
            },

			{ test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
			{ test: /\.ttf$/,    loader: "file-loader" },
			{ test: /\.eot$/,    loader: "file-loader" },
			{ test: /\.svg$/,    loader: "file-loader" },
		]
	},

	plugins: [
		new ExtractTextPlugin('styles.css'),
		// requerimento dos codigos aqui , equivale a um REQUIRE
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			'_': 'underscore',
			'Backbone': 'backbone',
			'Marionette': 'backbone.marionette',
			'Mn': 'backbone.marionette',
			
		}),
		new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.js"),
		new VendorChunkPlugin('vendor'),
	],
	resolve: {
		modulesDirectories: ['node_modules'],
		extensions: ['', '.js', '.es6', '.jsx']
	},
};


/* 

imports-loader (webpack.ProvidePlugin)
This loader allows you to put some modules or arbitrary 
JavaScript onto a local variable of the file.

resolve.alias
Replace modules by other modules or paths.

*/