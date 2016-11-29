var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        app: ['./src/js/app.js'],
    },
    output: {
        path: __dirname + '/public',
        filename: '[name].js',
        publicPath: 'http://localhost/'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader?sourceMap!postcss-loader!sass?sourceMap"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?sourceMap"
            },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'],
                    cacheDirectory: true
                }
            },
            {test: /\.svg(\?v=\d+\.\d+\.\d+)$/, loader: 'url?mimetype=image/svg+xml'},
            { test: /\.png$/, loader: "url-loader?limit=100000" },
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?mimetype=application/font-woff"},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?mimetype=application/font-woff"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?mimetype=application/octet-stream"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "url"}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },
    postcss: function () {
        return [autoprefixer];
    },
    // devServer: {
    //     proxy: {
    //         '*': 'http://localhost/'
    //     }
    // }
};