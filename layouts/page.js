import React from 'react'

import Head from 'next/head'
import { NextSeo } from 'next-seo'

export default function Page({ title, children }) {
  const _title = title ?? 'Kevin Romero Peces-Barba'

  return (
    <>
      <Head>
        <title>{_title}</title>
      </Head>

      <NextSeo
        openGraph={{
          title: _title,
        }}
      />

      {children}
    </>
  )
}
