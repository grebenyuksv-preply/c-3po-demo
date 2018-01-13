const webpack = require('webpack');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const extract = Boolean(process.env.WP_EXTRACT);
const locale = process.env.WP_LOCALE;
const HOST = process.env.HOST || 'http://127.0.0.1:8000';
const path = require('path');

const c3poConfig = {
    extract: extract ? { output: 'dist/translations.pot' } : null,
};

if (locale) {
    c3poConfig.resolve = { translations: `i18n/${locale}.po` };
}

const babelConfig = {
    presets: [['es2015', {modules: false}], 'react'],
    plugins: [['c-3po', c3poConfig]]
};

function localePath(path) {
    return (!locale) ? path : `${locale}/${path}`;
}

module.exports = {
    entry: {
        index: './src/index.js',
        'index-multiline': './src/index-multiline.js'
    },
    output: {
        path: path.join(__dirname, './docs'),
        filename: localePath('build-[name].js'),
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
        new webpack.DefinePlugin({
            HOST: JSON.stringify(HOST),
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            }
        }),
    ]
};
