import webpack from "webpack"
import { buildLoaders } from "./buildLoaders"
import { buildResolvers } from "./buildResolvers"
import { buildPlugins } from "./buildPlugins"
import { BuildOptions } from "./types/config"
import { buildDevServer } from "./buildDevServer"

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const {paths, isDev, mode} = options
  return {
    mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    output: {
      filename: "main.js",
      path: paths.output,
      clean: true,
    },
    plugins: buildPlugins(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  }
}