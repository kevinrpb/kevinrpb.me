import React from 'react'

import ExportedImage from 'next-image-export-optimizer'
import Icon from '@nextjs-utils/dynamic-icon'
import Link from '@nextjs-utils/sane-link'

import getEmailAddress from '@lib/mailobfuscate'

import Page from '@layouts/page'

const Home = () => (
  <Page>
    <main data-page='index'>
      <article className='deck'>
        <section className='card'>
          <ExportedImage
            src='/img/kevin.png'
            alt="Kevin' picture"
            width='500'
            height='500'
            useWebp={true}
          />
          <h1>Kevin Romero Peces-Barba</h1>
          <nav>
            <Link
              id='mail_card'
              href={`mailto:${getEmailAddress()}`}
              className='pill button shadow'
              aria-label='Link to send Kevin an email.'
            >
              <Icon name='FiAtSign' className='icon' />
              Email
            </Link>
            <Link
              href='https://github.com/kevinrpb'
              className='pill button shadow'
              aria-label="Link to Kevin's Github profile."
            >
              <Icon name='FiGithub' className='icon' />
              GitHub
            </Link>
            <Link
              href='https://mastodon.social/@kevinrpb'
              className='pill button shadow'
              aria-label="Link to Kevin's Mastodon profile."
            >
              <Icon name='FaMastodon' className='icon' />
              Mastodon
            </Link>
            <Link
              href='/cv'
              className='pill button shadow'
              aria-label="Link to Kevin's resume page."
            >
              <Icon name='FiFileText' className='icon' />
              Resume
            </Link>
            {/* <Link
              href='/blog'
              className='pill button shadow'
              aria-label="Link to Kevin's blog."
            >
              <Icon name='FaBlog' className='icon' />
              Blog
            </Link> */}
            {/*<Link
              href='/portfolio'
              className='pill button shadow'
              aria-label="Link to Kevin's portfolio."
            >
              <Icon name='FaFolder' className='icon' />
              Portfolio
            </Link> */}
          </nav>
        </section>

        <section className='about'>
          <p>
            Hi! This is Kevin 😀. I&apos;m a CS geek from Spain. You can see what I&apos;m up to in
            my <a href='https://github.com/kevinrpb'>GitHub</a> or{' '}
            <a href='https://twitter.com/kevinrpb'>Twitter</a> profiles.
          </p>
        </section>
      </article>
    </main>
  </Page>
)

export default Home
