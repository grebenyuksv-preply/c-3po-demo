const locale = process.env.POLYGLOT_LOCALE || '';

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: './dist',
        filename: locale ? `${locale}/build.js` : 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel-loader']
            },
        ]
    }
}