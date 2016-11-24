const webpack = require('webpack');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const extract = Boolean(process.env.WP_EXTRACT);
const locale = process.env.WP_LOCALE;
const HOST = process.env.HOST || 'http://127.0.0.1:8000';

const polyglotConfig = {
    extract: extract ? { output: 'dist/translations.pot' } : null,
    resolve: locale ? { locale } : null,
    locales: {
        'en-us': 'i18n/en.po',
        'ua': 'i18n/ua.po',
    }
};

const babelConfig = {
    presets: ['es2015', 'react'],
    plugins: [['polyglot', polyglotConfig]]
};

function localePath(path) {
    return (!locale || locale === 'en-us') ? path : `${locale}/${path}`;
}

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: './docs',
        filename: localePath('build.js'),
        libraryTarget: 'umd'
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
    },
    plugins: [
        new StaticSiteGeneratorPlugin('index', localePath('index.html')),
        new webpack.DefinePlugin({
            HOST: JSON.stringify(HOST),
            'process.env': JSON.stringify(process.env.NODE_ENV),
        }),
    ]
};
