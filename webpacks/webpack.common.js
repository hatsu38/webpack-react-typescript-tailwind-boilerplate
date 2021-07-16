const path = require("path");

module.exports = {
  entry: ["./src/index.tsx"],
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".jsx"],
    modules: ['node_modules'],
    alias: {
      Src: path.resolve(__dirname, 'src/'),
    },
  },
  watchOptions: {
    poll: true,
    ignored: /node_modules/,
  },
  plugins: [
  ],
  module: {
  },
};