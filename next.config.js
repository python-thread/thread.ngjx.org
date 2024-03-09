/** @type {import('nextra').withNextra} */
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  latex: true,
})

/** @type {import('next').NextConfig} */
const NextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'avatars.githubusercontent.com',
      pathname: '/u/*'
    }]
  },
  redirects: async () => ([
    {
      source: '/docs/v1.:major.:minor/:slug*',
      destination: '/docs/latest/:slug*',
      permanent: false
    }
  ])
}

module.exports = withNextra(NextConfig)
