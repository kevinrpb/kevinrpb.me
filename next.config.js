const isProd = process.env.NODE_ENV === 'production'
const isLocal = process.env.HOSTNAME === 'localhost'
const isPreview = process.env.VERCEL_PREVIEW || false

let assetPrefix = ''
if (isPreview) assetPrefix = 'https://kevinrpb-dev.vercel.app/'
else if (isProd && !isLocal) assetPrefix = 'https://kevinrpb.me/'

module.exports = {
  assetPrefix: assetPrefix,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: { images: { layoutRaw: true } },
}
