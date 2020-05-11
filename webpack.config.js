const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const env = process.env.NODE_ENV === 'prod' ? "production" : "development";
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
    resolve: {
        alias: {
          "@environment$": `${__dirname}/config/${env}.js`
        }
    },
    devServer: {
        historyApiFallback: true,
        proxy: {
            '/api': {
              target: 'http://localhost:8081',
              changeOrigin: true,
              secure: false
            }
          }
      },
    devtool: 'cheap-module-eval-source-map',
    optimization: {
        minimize: true
      },
    plugins: [
        new HtmlWebpackPlugin({
            template : './src/index.html'
        }),
    //     new webpack.DefinePlugin({ //<--key to reduce React's size
    //     'process.env': {
    //       'NODE_ENV': JSON.stringify('production')
    //     }
    //   }),
        //new webpack.optimize.DedupePlugin(),
       // new webpack.optimize.UglifyJsPlugin(),
        // new webpack.optimize.AggressiveMergingPlugin(),
        // new CompressionPlugin({  
        // asset: "[path].gz[query]",
        // algorithm: "gzip",
        // test: /\.js$|\.css$|\.html$/,
        // threshold: 10240,
        // minRatio: 0.8
        // })
        
    ]
}