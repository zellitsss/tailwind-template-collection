const path = require('path');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MozJpeg = require('imagemin-mozjpeg');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry  : './src/js/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                use: [
                    'url-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([{
            from: 'images/**/**',
            to: path.resolve(__dirname, 'dist')
        }]),
        new ImageminPlugin({
            pngquant: ({quality: [0.5, 0.5]}),
            plugins: [MozJpeg({quality: 50})],
        }),
    ]
};