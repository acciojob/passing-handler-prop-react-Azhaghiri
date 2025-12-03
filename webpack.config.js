const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },

  // devtool is helpful during development
  devtool: 'eval-source-map',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      // optional: images (webpack4 needs file-loader/url-loader)
      // {
      //   test: /\.(png|jpe?g|gif|svg)$/,
      //   use: [{ loader: 'file-loader', options: { name: '[name].[hash].[ext]', outputPath: 'images' } }]
      // }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],

  resolve: {
    extensions: ['.js', '.jsx']
  },

  // optional devServer config (useful if you prefer config instead of CLI flags)
  
devServer: {
  // serve static files from dist
  contentBase: path.resolve(__dirname, 'dist'),
  // enable HMR
  hot: true,
  // open browser automatically
  open: true,
  // choose a port
  port: 8080,
  // show overlay for errors in browser
  overlay: true,
  // fallback to index.html for SPA routing
  historyApiFallback: true
}
};
