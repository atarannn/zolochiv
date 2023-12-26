const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
  mode: 'development',
  entry: {
    index: './src/assets/scripts/index-app.js',
    home: './src/assets/scripts/gulp-modules/home.js',
    cottages: './src/assets/scripts/gulp-modules/cottages.js',
    contacts: './src/assets/scripts/gulp-modules/contacts.js',
    solution: './src/assets/scripts/gulp-modules/turnkey-solution.js',
    developer: './src/assets/scripts/gulp-modules/developer.js',
    technologiesSequence: './src/assets/scripts/gulp-modules/technologiesSequence.js',
  },
  output: {
    filename: '[name].bundle.js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),

  ],

  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      {
        test: /\.glsl$/,
        use: [
          'raw-loader',
          'glslify-loader'
        ]
      }
    ],
  },
};

module.exports = config;
