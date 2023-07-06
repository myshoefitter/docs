import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <img src="https://uploads-ssl.webflow.com/627136f58be1570905eb8a28/6458f00e1462140aca5e9f19_mySHOEFITTER%20Logo-p-500.png" width="160px" />,
  project: {
    link: 'https://github.com/myshoefitter/',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/myshoefitter/',
  footer: {
    text: '© mySHOEFITTER GmbH',
  },
  nextThemes: {
    defaultTheme: 'light'
  },
}

export default config
