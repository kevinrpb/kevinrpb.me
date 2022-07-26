import React from 'react'

import Icon from '@nextjs-utils/dynamic-icon'
import Link from '@nextjs-utils/sane-link'

import Page from '@layouts/page'

const PortfolioHeader = () => (
  <header data-page='portfolio'>
    <nav>
      <Link href='/' className=''>
        <Icon name='FiHome' className='icon' />
        Home
      </Link>

      <Link href='/portfolio' className=''>
        <Icon name='FiFolder' className='icon' />
        Portfolio
      </Link>
    </nav>
  </header>
)

const Portfolio = () => (
  <Page>
    <PortfolioHeader />

    <main data-page='portfolio'>
      <article className='deck'>
        {/* <h1>Portfolio</h1> */}

        <section className=''>
          <h2>Web</h2>
        </section>

        <section className=''>
          <h2>iOS</h2>
        </section>
      </article>
    </main>
  </Page>
)

export default Portfolio
