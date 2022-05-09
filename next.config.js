const isProd = process.env.NODE_ENV === 'production'
const isLocal = process.env.HOSTNAME === 'localhost'
const isPreview = process.env.VERCEL_PREVIEW || false

let assetPrefix = ''
if (isPreview) assetPrefix = 'https://kevinrpb-dev.vercel.app/'
else if (isProd && !isLocal) assetPrefix = 'https://kevinrpb.me/'

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  assetPrefix: assetPrefix,
  images: {
    loader: 'custom',
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    nextImageExportOptimizer: {
      imageFolderPath: 'public/img',
      exportFolderPath: 'out',
      quality: 75,
    },
  },
  experimental: { images: { layoutRaw: true } },
  env: {
    storePicturesInWEBP: true,
  },
  async rewrites() {
    return [
      // {
      //   source: '/resume',
      //   destination: '/cv'
      // },
    ]
  },
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/cv',
        permanent: true,
      },
    ]
  },
}
