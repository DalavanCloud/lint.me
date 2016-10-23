const config = require('./webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const app = require('./packages/backend')

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    headers: { 'X-Served-By': 'Webpack' },
    inline: true,
    filename: 'js/app.js',
    publicPath: '/',
    stats: {
        colors: true
    },
    noInfo: true
}));

app.use(require('webpack-hot-middleware')(compiler));
