const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/App.js', // Entry point of your React application
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js', // Name of the bundled JavaScript file
        publicPath: '/',
    },
    mode: 'development', // Set the mode to development
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Apply this rule to .js and .jsx files
                exclude: /node_modules/, // Don't process files in node_modules
                use: {
                    loader: 'babel-loader', // Use babel-loader to transpile JavaScript
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Use these Babel presets
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]', // Output path for images
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // Use this HTML file as a template
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
            publicPath: '/'
        },
        compress: true,
        port: 3000,
        historyApiFallback: true,
        hot: true
    },
};
