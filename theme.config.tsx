export default {
  logo: <span>thread</span>,
  footer: {
    text: `Copyright (c) ${(new Date()).getFullYear()}, thread.ngjx.org | All rights reserved`
  },
  project: {
    link: 'https://github.com/python-thread/thread'
  },
  chat: {
    link: 'https://discord.gg/WTAvycRmqP'
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – thread'
    }
  }
}