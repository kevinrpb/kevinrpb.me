const isProduction = true //process.env.NODE_ENV === 'production'
const isVercel = process.env.VERCEL || false
const isGithub = process.env.GITHUB_ACTIONS || false

let assetPrefix = '/'
if (isVercel) assetPrefix = `https://${process.env.VERCEL_URL}/`
else if (isGithub) assetPrefix = `https://${process.env.GITHUB_URL}/`

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  assetPrefix: assetPrefix,
  images: {
    loader: 'custom',
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  env: {
    nextImageExportOptimizer_imageFolderPath: 'public/img',
    nextImageExportOptimizer_exportFolderPath: 'out',
    nextImageExportOptimizer_quality: 75,
    nextImageExportOptimizer_storePicturesInWEBP: false,
    nextImageExportOptimizer_generateAndUseBlurImages: true,
  },
  async rewrites() {
    return []
  },
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/cv',
        permanent: true,
      },
      {
        source: '/blog',
        destination: isProduction ? '/404' : '/blog',
        permanent: false,
      },
      {
        source: '/blog/:path*',
        destination: isProduction ? '/404' : '/blog/:path*',
        permanent: false,
      },
    ]
  },
}
