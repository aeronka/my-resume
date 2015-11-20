var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var postcssImport = require('postcss-import');
var postcssSimpleVars = require('postcss-simple-vars');
var postcssMixins = require('postcss-mixins');
var postcssNested = require('postcss-nested');
var autoprefixer = require('autoprefixer');

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
            loader: ExtractTextPlugin.extract('style', 'css!postcss')
        }, {
            test: /\.html$/,
            loaders: [
                'file?name=[path][name].[ext]'
            ]
        }, {
            test: /\.(png|jpg|svg|ico)$/,
            loaders: [
                'file?name=[path][name].[ext]',
                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
        }]
    },

    postcss: function (webpack) {
        return [
            postcssImport({
                addDependencyTo: webpack
            }),
            postcssMixins,
            postcssSimpleVars,
            postcssNested,
            autoprefixer({ browsers: ['last 5 versions'] })
        ];
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