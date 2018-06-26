const path = require('path'),
      CleanWebpackPlugin = require('clean-webpack-plugin'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      MiniCssExtractPlugin = require("mini-css-extract-plugin"),
      autoprefixer = require('autoprefixer'),
      webpack = require('webpack');


const config = {
  // Base
  context: path.resolve(__dirname, 'src'),
  mode: 'development',


  // Dev
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    compress: true,
    port: 12000,
    stats: 'errors-only',
    open: true
  },


  // Entry - Output
  entry: {
    index: './index.js'
  },
  output: {
    filename: '[name].budle.js',
    path: path.resolve(__dirname, 'dist')
  },


  // Module
  module: {
    rules: [

      // JS
      {
        test: /\.js$/,
        include: /src/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['env']
          }
        }
      },

      // SASS
      {
        test: [/\.css$/, /\.scss$/],
        include: [path.resolve(__dirname, 'src', 'assets', 'scss')],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },

      // IMGS
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 100
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '100',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 50
              }
            }
          }
        ]
      },

      // FONTS
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }

    ]
  },


  // Plugins
  plugins: [
    new CleanWebpackPlugin(['dist']),
    // Home
    new HtmlWebpackPlugin({
      title: 'Flash App',
      myPageHeader: 'Home',
      template: './index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
        postcss: [autoprefixer]
      }
    })
  ]
}


module.exports = config;
