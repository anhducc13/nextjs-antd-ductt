const webpack = require('webpack');
const withSass = require('@zeit/next-sass');
const withLess = require('@zeit/next-less');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const withCss = require('@zeit/next-css');
const { parsed: localEnv } = require('dotenv').config();

module.exports = withBundleAnalyzer(withCss(withSass(withLess({
  sassLoaderOptions: {
    sourceMap: true,
  },
  webpack(config, { isServer }) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }

    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    });

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: 'resolve-url-loader',
          options: {},
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        },
      ],
    });

    return config;
  },
}))));
