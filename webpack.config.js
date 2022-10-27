const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: "[name][ext]", //this will let image assets keep their name and extension
    },
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        /*port: 3000, */
    },
    plugins: [
        new HtmlWebpackPlugin({
        title: 'Todo List',
        filename: "index.html",
        template: "src/template.html",
        }),
    ],
    module: {
        rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        ],
    },
    /*optimization: { //for webpack-dev-server, added for cases where there are more than one entrypoint on a single HTML page.
        runtimeChunk: 'single',
    },*/
};