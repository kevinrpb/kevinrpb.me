import React from 'react'

import Image from 'next/future/image'

// import ExportedImage from 'next-image-export-optimizer'

import getEmailAddress from '@lib/mailobfuscate'

import Page from '@layouts/page'
import Icon from '@components/icon'
import SaneLink from '@components/link'

import profilePicture from '@img/kevin.png'

const Home = () => (
  <Page>
    <main data-page='index'>
      <article className='deck'>
        <section className='card'>
          <Image src={profilePicture} alt="Kevin' picture" width="500px" height="500px" />
          <h1>Kevin Romero Peces-Barba</h1>
          <nav>
            <SaneLink
              id='mail_card'
              href={`mailto:${getEmailAddress()}`}
              aria-label='Link to send Kevin an email.'
            >
              <Icon name='email' />
              Email
            </SaneLink>
            <SaneLink
              href='https://github.com/kevinrpb'
              aria-label="Link to Kevin's Github profile."
            >
              <Icon name='github' />
              GitHub
            </SaneLink>
            <SaneLink
              href='https://twitter.com/kevinrpb'
              aria-label="Link to Kevin's Github profile."
            >
              <Icon name='twitter' />
              Twitter{' '}
            </SaneLink>
            <SaneLink href='/cv' aria-label="Link to Kevin's resume page.">
              <Icon name='resume' />
              Resume
            </SaneLink>
            {/* <SaneLink href='/blog' aria-label="Link to Kevin's blog.">
              <Icon name='blog' />
              Blog
            </SaneLink> */}
          </nav>
        </section>

        <section className='about'>
          <p>
            Hi! This is Kevin 😀. I&apos;m a CS geek from Spain, currently doing research in the
            field of deep learning @{' '}
            <a href='https://www.uc3m.es/ss/Satellite/UC3MInstitucional/en/Detalle/Organismo_C/1422545966182/1371211778776/Applied_Artificial_Intelligence_Group_(GIAA)'>
              GIAA-UC3M
            </a>{' '}
            while working as a Tech Architect @ <a href='https://axa.es'>AXA</a>.
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
