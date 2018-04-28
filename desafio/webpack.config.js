const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Se o "env" for production
module.exports = env => {
  const isProduction = env === 'production';

  // Setando a porta padrão
  const port = '8080';

  return {
    entry: ['./src/scripts/App.js', './src/styles/main.less'],
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'assets/scripts/bundle.js'
    },
    module: {
      rules: [
        // JavaScript Loader
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },

        {
          test: /\.pug$/,
          loader: 'pug-loader'
        },

        // Styles Loader
        {
          test: /\.(less|css)$/,
          exclude: [/node_modules/, /\.svg$/],
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  modules: true,
                  localIdentName: '[local]',
                  url: false
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: true,
                  strictMath: true
                }
              }
            ]
          })
        },

        // Images Loader
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'assets/images/',
                name: '[name].[ext]'
              }
            },
            {
              loader: 'img-loader',
              options: {
                enabled: isProduction
              }
            }
          ]
        }
      ]
    },

    // Plugins
    plugins: [
      new HTMLPlugin({
        filename: 'index.html',
        template: './src/index.pug',
        alwaysWriteToDisk: true,
        minify: {
          collapseWhitespace: isProduction
        }
      }),
      new HtmlWebpackHarddiskPlugin(),
      new ExtractTextPlugin({
        filename: 'assets/styles/styles.css',
        disable: !isProduction
      })
    ],

    // Source Maps
    devtool: isProduction ? 'source-map' : 'inline-source-map',

    devServer: {
      contentBase: path.join(__dirname, 'public'),
      hot: true,
      host: '0.0.0.0',
      public: `localhost:${port}`,
      historyApiFallback: true,
      watchContentBase: true
    }
  };
};
