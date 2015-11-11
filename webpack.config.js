var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname + '/frontend',
    entry: './index',

    output: {
        path: __dirname + '/public',
        filename: 'index.js'
    },

    watch: (process.env.NODE_ENV == 'development'),

    devtool: (process.env.NODE_ENV == 'development') ? "cheap-inline-module-source-map" : null,

    resolve: {
        moduleDirectories: ['node-modules'],
        extensions: ['', '.js']
    },

    resolveLoader: {
        moduleDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css!autoprefixer?browsers=last 5 versions')
        }, {
            test: /\.(png|jpg)$/,
            loader: 'file?name=[path][name].[ext]'
        }]
    },

    plugins: [
        new ExtractTextPlugin('style.css', {allChunks: true})
    ]
};

if (process.env.NODE_ENV == 'production') {

    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );

}