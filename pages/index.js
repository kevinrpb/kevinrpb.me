import React from 'react'

import Image from 'next/future/image'

// import ExportedImage from 'next-image-export-optimizer'
import Icon from '@nextjs-utils/dynamic-icon'
import Link from '@nextjs-utils/sane-link'

import getEmailAddress from '@lib/mailobfuscate'

import Page from '@layouts/page'

import profilePicture from '@img/kevin.png'

const Home = () => (
  <Page>
    <main data-page='index'>
      <article className='deck'>
        <section className='card'>
          <Image src={profilePicture} alt="Kevin' picture" width="500px" height="500px" />
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
              href='https://twitter.com/kevinrpb'
              className='pill button shadow'
              aria-label="Link to Kevin's Github profile."
            >
              <Icon name='FiTwitter' className='icon' />
              Twitter{' '}
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
            <Link
              href='/portfolio'
              className='pill button shadow'
              aria-label="Link to Kevin's portfolio."
            >
              <Icon name='FaFolder' className='icon' />
              Portfolio
            </Link>
          </nav>
        </section>

        <section className='about'>
          <p>
            Hi! This is Kevin 😀. I&apos;m a CS geek from Spain, currently doing research in the
            field of deep learning @{' '}
            <a href='https://www.uc3m.es/ss/Satellite/UC3MInstitucional/en/Detalle/Organismo_C/1422545966182/1371211778776/Applied_Artificial_Intelligence_Group_(GIAA)'>
              GIAA-UC3M
            </a>.
          </p>
          <p>
            I majored in Computer Science and Business Managemente and I&apos;m currently pursuing a
            masters degree in CS and Technology, both @ <a href='https://uc3m.es'>UC3M</a>.
          </p>
        </section>
      </article>
    </main>
  </Page>
)

export default Home
