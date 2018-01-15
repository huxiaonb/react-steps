/*global module, process*/
"use strict";
var webpack = require('webpack');

var dev = process.env.NODE_ENV === 'development';

module.exports = {
    devtool: dev ? '#eval-cheap-module-source-map' : null,
    entry: './lib/index.js',
    output: {
        path: './dist/',
        filename: 'react-steps.js',
        libraryTarget: 'umd'
    },
    externals: {
        'react': 'react'
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: 'react-steps.js.map'
        }),
        new webpack.optimize.UglifyJsPlugin({
            exclude: /node_modules/,
            compress: {warnings: false},
            sourceMap: true,
            mangle: false
        })
    ],
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: 'style!css'
            },
            {
                test: /\.js$/,
                loader: 'babel'
            }
        ]
    }
};
