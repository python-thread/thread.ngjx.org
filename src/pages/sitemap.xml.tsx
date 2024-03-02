import fs from 'fs'

import type { GetServerSidePropsResult, GetServerSidePropsContext } from 'next'

const CanonicalURL = process.env.NODE_ENV === 'production' ? 'https://thread.ngjx.org' : 'http://localhost:3000'


export const getServerSideProps = async ({ res }: GetServerSidePropsContext): Promise<{ props: {} }> => {
  // Generate paths
  const staticPages = fs.readdirSync('src/pages', { recursive: true })
    .filter((staticPage) => {
      if (typeof staticPage !== 'string') return false

      const fileName = staticPage.split('/').slice(-1)[0]

      // Ignore folders and non-page files
      if (!['md', 'mdx', 'ts', 'tsx'].includes(fileName.split('.').slice(-1)[0])) return false

      // Ignore list
      return !['_app.mdx', '404.mdx'].includes(fileName)
    })
    .map((staticPagePath) => {
      if (typeof staticPagePath !== 'string') return ''

      // Remove extension (.tsx, .mdx, etc)
      const path = staticPagePath.split('.').slice(0, -1).join('.')
      const filename = path.split('/').slice(-1)[0]

      // index.{mdx, md, tsx, jsx} should the the folder path
      const uri = filename === 'index' ? path.split('/').slice(0, -1).join('/') : path

      return `${CanonicalURL}/${uri}`
    })

  // Write XML
  const siteMap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages.map((url) => `
        <url>
          <loc>${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>1.0</priority>
        </url>
      `).join('')}
    </urlset>
  `

  res.setHeader('Content-Type', 'text/xml')
  res.write(siteMap)
  res.end()

  return { props: {} }
}

// Let ServerProps generate the sitemap
export default function SiteMap() { }

