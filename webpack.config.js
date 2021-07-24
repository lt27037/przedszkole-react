const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devMode = process.env.NODE_ENV === 'development';

module.exports = (env) => ({
    mode: process.env.NODE_ENV,
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.bundle.js',
        chunkFilename: '[id].[hash:8].js',
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.d.ts'],
        alias: {
            'src': path.resolve(__dirname, 'src'),
            'components': path.resolve(__dirname, 'src/components'),
            'assets': path.resolve(__dirname, 'src/assets'),
        },
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        port: 3030,
        watchContentBase: true,
        open: true,
        historyApiFallback: true,
    },
    module: {
        rules:[
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-modules-typescript-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: {
                                localIdentName: '[local]__[hash:base64:4]',
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:4].css',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            title: 'Caching',
        }),
    ]
});