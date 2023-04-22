import React from 'react'

import Icon from '@nextjs-utils/dynamic-icon'
import Link from '@nextjs-utils/sane-link'

import Resume from '@/components/resume'

import cv from '@/data/cv.json'

import './page.styles.scss'

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

const ResumePage: React.FC = () => (
  <>
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
  </>
)

export default ResumePage
