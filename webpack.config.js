const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const WorkerPlugin = require("worker-plugin");
const path = require("path");

const copyRules = [
  {
    from: __dirname + "/src/index.html",
    to: __dirname + "/dist/index.html",
  },
];

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "~": path.join(__dirname, "/src"),
    },
  },
  devServer: {
    historyApiFallback: true,
  },
  output: {
    globalObject: "self",
    filename: "[name].js",
    chunkFilename: "[name].[id].[contenthash].js",
    publicPath: "/",
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        test: /\.m?js(\?.*)?$/i,
        sourceMap: true,
        terserOptions: {
          safari10: true,
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.w\.ts$/,
        use: [
          {
            loader: "worker-loader",
            options: {
              publicPath: process.env.ASSET_HOST || "/",
              inline: true,
            },
          },
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],
  },
  plugins: [
    new CopyPlugin(copyRules),
    new WorkerPlugin({ globalObject: "self" }),
  ],
};
