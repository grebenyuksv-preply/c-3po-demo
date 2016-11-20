const extract = Boolean(process.env.WP_EXTRACT);
const locale = process.env.WP_LOCALE;

const polyglotConfig = {
    extract: extract ? { output: 'dist/translations.pot' } : null,
    resolve: locale ? { locale } : null,
    locales: {
        'en-us': 'dist/translations.po'
    }
};

const babelConfig = {
    presets: ['es2015'],
    plugins: [['polyglot', polyglotConfig]]
};


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
                loader: 'babel-loader',
                query: babelConfig
            },
        ]
    }
}