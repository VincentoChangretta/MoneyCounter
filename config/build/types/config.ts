export type BuildMode = 'development' | 'production';

export interface BuildEnvs {
  mode: BuildMode;
  port: number;
}

export interface BuildPaths {
  html: string;
  entry: string;
  output: string;
  src: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  port: number;
  isDev: boolean;
}
