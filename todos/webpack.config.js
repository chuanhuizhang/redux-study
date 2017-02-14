let path = require('path')

const config = {
    entry: ['./app.jsx'],
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: 'babel-loader'}
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}

module.exports = config
