import React from 'react'

import Icon from '@nextjs-utils/dynamic-icon'
import Link from '@nextjs-utils/sane-link'

import Page from '@layouts/page'
import Resume from '@components/resume'

import cv from '@data/cv.json'

const CV = () => (
  <Page>
    <header data-page='cv'>
      <Link href='/' className=''>
        <Icon name='home' />
        Home
      </Link>

      <Link
        href='/files/kevinrpb_cv.pdf'
        className='pill percentage-100 shadow'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Icon name='download' />
        Download
      </Link>
    </header>

    <main data-page='cv'>
      <Resume {...cv} />
    </main>
  </Page>
)

export default CV
