import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const { isDev } = options;
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader'],
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
            namedExport: false, // когда при импорте классов из module.scss выдает ошибку undefined
          },
        },
      },
      'sass-loader',
    ],
  };
  return [typescriptLoader, cssLoader, scssLoader];
};
