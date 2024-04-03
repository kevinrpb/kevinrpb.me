const isProduction = true //process.env.NODE_ENV === 'production'
const isVercel = process.env.VERCEL || false
const isGithub = process.env.GITHUB_ACTIONS || false

let assetPrefix = '/'
if (isVercel) assetPrefix = `https://${process.env.VERCEL_URL}/`
else if (isGithub) assetPrefix = `https://${process.env.GITHUB_URL}/`

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: assetPrefix,
  async rewrites() {
    return [
      {
        source: '/.well-known/webfinger/:path*',
        destination: '/api/well-known/webfinger/:path*',
      },
    ]
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

module.exports = nextConfig
