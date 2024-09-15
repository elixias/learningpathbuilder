
// const nodeExternals = require('webpack-node-externals');
// const { RunScriptWebpackPlugin } = require('run-script-webpack-plugin');
// const webpack = require('webpack');
// const path = require('path');

// module.exports = function(options, webpack) {
//   return {
//     ...options,
//     entry: ['webpack/hot/poll?100', options.entry],
//     externals: [
//       nodeExternals({
//         allowlist: ['webpack/hot/poll?100'],
//       }),
//     ],
//     plugins: [
//       ...options.plugins,
//       new webpack.HotModuleReplacementPlugin(),
//       new RunScriptWebpackPlugin({ name: options.output.filename }),
//     ],
//   };
// };
