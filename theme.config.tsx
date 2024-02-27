import type { DocsThemeConfig } from 'nextra-theme-docs'


const Logo = <span>thread</span>
const Footer = (
  <div className='flex w-full flex-col items-center sm:items-start'>
    <div className='text-lg font-semibold'>
      Your threading solution ♡⸜(˶˃ ᵕ ˂˶)⸝♡
    </div>
    <div className='mt-6 text-xs'>
      Copyright (c) {(new Date()).getFullYear()}, thread.ngjx.org | All rights reserved
    </div>
  </div>
)


const config: DocsThemeConfig = {
  logo: Logo,
  head: Head,
  project: {
    link: 'https://github.com/python-thread/thread'
  },
  docsRepositoryBase: 'https://github.com/python-thread/thread.ngjx.org/tree/main',
  chat: {
    link: 'https://discord.gg/WTAvycRmqP'
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – thread'
    }
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  toc: { backToTop: true }
}

export default config
