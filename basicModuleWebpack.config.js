const path = require('path');
const webpack = require('webpack');
const PRODUCTION = 'production';

let wpconfig = {
    entry: {
        mainModules: './src/entries/basicModules.js',
    },
    output: {
        filename: 'basicModules.js',
        path: path.resolve(__dirname, './dist/basic')
    },

    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use: ['babel-loader']
        }]
    },
    resolve: {
        extensions: [".js",".jsx",".json"]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.ProvidePlugin({
            React: 'React'
        }),
        new webpack.DefinePlugin({
            'process.env':{ 'NODE_ENV': JSON.stringify(PRODUCTION)},
            'NODE_ENV':  JSON.stringify(PRODUCTION),
        })
    ]
};

process.noDeprecation = true;

module.exports = wpconfig;
