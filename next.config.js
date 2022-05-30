const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [optimizedImages, {
    // mozjpeg: {
    //   quality: 80,
    // },
    // pngquant: {
    //   speed: 3,
    //   strip: true,
    //   verbose: true,
    // },
    imagesPublicPath: process.env.REPO_PREFIX || 'test',
    // optimizeImages: false,
  }],

  {
    reactStrictMode: true,
    basePath: process.env.REPO_PREFIX,
    assetPrefix: process.env.REPO_PREFIX,
  }
]);
