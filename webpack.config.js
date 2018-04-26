const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: {
    index: "./src/js/index.js"
  },
  output: {
    filename: "./js/[name].js",
    path: path.resolve(__dirname, "dist/")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      },
      {
        test: /\.(scss|css|sass)$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                outputStyle: "expanded",
                sourceMap: true,
                sourceMapContents: true
              }
            }
          ],
          fallback: "style-loader"
        })
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: false }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "./assets/images"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/html/index.html",
      inject: "body"
    }),
    new ExtractTextPlugin({
      filename: "./css/styles.css"
    }),
    new CopyWebpackPlugin([
      {
        from: './src/images/body-bg.png',
        to: 'css/assets/images/body-bg.png',
        toType: 'file'
      }
    ])
  ]
};
