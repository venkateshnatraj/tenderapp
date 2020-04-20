const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output : {
        path : path.join(__dirname, '/dist'),
        filename : 'bundle.js',
        publicPath: '/'
    },
    module :{
        rules : [
            // {
            //     enforce: 'pre',
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: 'eslint-loader',
            //   },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
                
             }
        ]
    },
    devServer: {
        historyApiFallback: true,
      },
    plugins: [
        new HtmlWebpackPlugin({
            template : './src/index.html'
        }),
        
    ]
}