const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
	app: path.join(__dirname, 'src'),
	build: path.join(__dirname, 'dist')
};


process.env.BABEL_ENV = TARGET;

const common = {
	entry: PATHS.app,
	resolve: {
		extensions: ['', '.js', '.jsx', '.less']
	},
	output: {
		path: PATHS.build,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.less$/,
        		loaders: ["style", "css", "postcss-loader","less"],
				include: PATHS.app
			},
			{
				test: /\.jsx?$/,
				loaders: ['babel?cacheDirectory'],
				include: PATHS.app
			}
		]
	},
	postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
};

if (TARGET === 'start' || !TARGET) {
	module.exports = merge(common, {
		devtool: 'eval-source-map',
		devServer: {
			contentBase: PATHS.build,
			historyApiFallback: true,
			hot: true,
			inline: true,
			progress: true,
			stats: 'errors-only',
			host: process.env.HOST,
			port: process.env.PORT
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin()
		]
	});
}

if (TARGET === 'build') {
	module.exports = merge(common, {});
}