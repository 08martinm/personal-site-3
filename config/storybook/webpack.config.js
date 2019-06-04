const merge = require('webpack-merge');
const HappyPack = require('happypack');

module.exports = ({ config }) =>
  merge(config, {
    node: { fs: 'empty' },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, use: 'happypack/loader' },
        {
          test: /\.(png|jpe?g|gif|woff2?|ttf|eot)$/,
          loader: 'url-loader?limit=8000',
        },
        {
          test: /\.(svg)$/,
          use: 'svg-inline-loader',
        },
        {
          test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
          loader: 'file-loader?name=fonts/[name].[ext]',
        },
        { use: ['style-loader', 'css-loader'], test: /\.(css|scss)$/ },
      ],
    },
    plugins: [new HappyPack({ loaders: ['babel-loader'] })],
    devServer: {
      inline: true,
      hot: true,
    },
  });
