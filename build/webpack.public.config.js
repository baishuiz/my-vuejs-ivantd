var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        'ivantd': './packages/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../public'),
        publicPath: '/public/',
        library: 'ivantd',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    resolve: {
        extensions: ['.js', '.vue']
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader'
            ]
        }, { 
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, 
            loader: 'url-loader?limit=8192'
        }]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
}