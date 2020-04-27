const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
    //entry: './src/index.js',
    entry: {
        app: ['babel-polyfill', './src/index.js']
    } ,
    mode: 'development',
   
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
                
             },
             {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
             }
        ]
    },
    devServer: {
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
          },
      
      },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template : './src/index.html'
        }),
        
    ]
}