import React from 'react'

import Icon from '@nextjs-utils/dynamic-icon'
import Link from '@nextjs-utils/sane-link'

import Page from '@layouts/page'
import Resume from '@components/resume'

import cv from '@data/cv.json'

const DownloadLink = () => (
  <Link
    href='/files/kevinrpb_cv.pdf'
    className='pill percentage-100 shadow'
    target='_blank'
    rel='noopener noreferrer'
  >
    <Icon name='FiDownload' className='icon' />
    Download
  </Link>
)

// eslint-disable-next-line no-unused-vars
const DownloadButton = () => {
  const handle = () => {}

  return (
    <button type='button' className='pill percentage-100 shadow' onClick={handle}>
      <Icon name='FiDownload' className='icon' />
      Download
    </button>
  )
}

const CV = () => (
  <Page>
    <header data-page='cv'>
      <Link href='/' className=''>
        <Icon name='FiHome' className='icon' />
        Home
      </Link>

      <DownloadLink />
    </header>

    <main data-page='cv'>
      <Resume {...cv} />
    </main>
  </Page>
)

export default CV
