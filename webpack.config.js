const path = require('path');

module.exports = {
    //1
    entry: path.resolve(__dirname, './src/index.js'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve:{
        extensions: ['*', '.js', '.jsx']
    },
    //2
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    //3
    devServer: {
        static: path.resolve(__dirname, './dist'),
    },
};