import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>thread</span>,
  footer: {
    text: `Copyright (c) ${(new Date()).getFullYear()}, thread.ngjx.org | All rights reserved`
  },
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
    defaultMenuCollapseLevel: 1
  }
}

export default config
