const debug = process.env.NODE_ENV !== 'production';

const webpack       = require('webpack');
const precss        = require('precss');
const autoprefixer  = require('autoprefixer');

module.exports = {
    context: __dirname,
    devtool: debug ? 'inline-sourcemap' : null,
    entry: ['./script.js'],
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader!postcss-loader" },
            { exclude: ['/node_modules/', '/css/'], loader: 'babel-loader' }
        ]
    },
    postcss: function () {
        return [precss, autoprefixer];
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};
