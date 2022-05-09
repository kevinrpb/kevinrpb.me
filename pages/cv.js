import React from 'react'

import Page from '@layouts/page'
import SaneLink from '@components/link'
import Resume from '@components/resume'

import cv from '@data/cv.json'

const CV = () => (
  <Page>
    <header data-page='cv'>
      <SaneLink
        href='/files/kevinrpb_cv.pdf'
        className='pill percentage-100 shadow'
        target='_blank'
        rel='noopener noreferrer'
      >
        Download Resume
      </SaneLink>
    </header>

    <main data-page='cv'>
      <Resume {...cv} />
    </main>
  </Page>
)

export default CV
