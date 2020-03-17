const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: { 
        'data.loader': './src/index.ts',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    devtool : 'inline-source-map',
    devServer : {
        contentBase : './dist'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['babel-loader', 'ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name : '[name].[ext]',
                    outputPath: 'assets',
                },
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'My Awesome application',
            myPageHeader: 'Hello World',
            template: './src/index.html',
            filename: 'index.html' //relative to root of the application
        })
    ]
}