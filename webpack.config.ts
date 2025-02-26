import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnvs, BuildPaths } from "./config/build/types/config";

const path = require("path");
export default (env: BuildEnvs) => {
  const paths: BuildPaths = {
    html: path.resolve(__dirname, "public", "index.html"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "build"),
    src: path.resolve(__dirname, "src")
  }
  
  const mode = env.mode || "development"
  const port = env.port || 3000
  
  const isDev = mode === "development"
  
  const config = buildWebpackConfig({
    mode,
    paths,
    port,
    isDev
  });

  return config
}