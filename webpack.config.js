const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    entry: {main: './src/pages/index/index.js', about: './src/pages/about/about.js', analytics: './src/pages/analytics/analytics.js'},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].[chunkhash].js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [(isDev ? 'style-loader' : {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                }),
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            esModule: false
                        },
                    }, 'postcss-loader']
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=./vendor/[name].[ext]'
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
                use: [
                    'file-loader?name=./images/[name].[ext]',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            esModule: false,
                            bypassOnDebug: true,
                            disable: true
                        }
                    },
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './pages/style.[contenthash].css'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default'],
            },
            canPrint: true
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: './src/pages/index/index.html',
            filename: 'index.html',
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: './src/pages/about/about.html',
            filename: 'about.html',
            chunks: ['about']
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: './src/pages/analytics/analytics.html',
            filename: 'analytics.html',
            chunks: ['analytics']
        }),
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new WebpackMd5Hash()
    ]
};