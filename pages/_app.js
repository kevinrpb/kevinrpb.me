import React from 'react'

import { DefaultSeo } from 'next-seo'

import Layout from '@layouts/base'

import '@styles/main.scss'

const MainApp = ({ Component, pageProps }) => (
  <Layout>
    <DefaultSeo
      openGraph={{
        type: 'website',
        url: 'https://kevinrpb.me',
        locale: 'en_US',
        site_name: 'Kevin Romero Peces-Barba',
        defaultTitle: 'Kevin Romero Peces-Barba',
        titleTemplate: '%s',
        description: '',
        images: [
          {
            url: 'https://kevinrpb.me/icon/icon-512.png',
            width: 512,
            height: 512,
            alt: 'Kevin Romero Peces-Barba',
          },
        ],
      }}
      twitter={{
        handle: '@kevinrpb',
        // site: '@',
        cardType: 'summary',
      }}
    />
    <Component {...pageProps} />
  </Layout>
)

export default MainApp
