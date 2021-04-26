// const CompressionWebpackPlugin = require("compression-webpack-plugin");
// const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  outputDir: 'front_dist',
  lintOnSave: false,
//   configureWebpack: {
//     optimization: {
//       minimize: true,
//       minimizer: [
//         new TerserPlugin({
//           sourceMap: false,
//           parallel: true,
//         }),
//       ],
//     },
//     plugins: [
//       new CompressionWebpackPlugin(),
//     ],
//   },
//   chainWebpack: config => {
//     config
//       .plugin('html')
//       .tap(args => {
//         args[0].title = process.env.VUE_APP_NAME ? process.env.VUE_APP_NAME : 'demo';
//         args[0].logo = process.env.VUE_APP_LOGO ? process.env.VUE_APP_LOGO : 'favicon.ico';
//         return args;
//       })
//   }
}
