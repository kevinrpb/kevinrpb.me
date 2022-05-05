import React from 'react'

import ExportedImage from 'next-image-export-optimizer'

import Page from '@layouts/page'
import BackgroundCanvas from '@components/background-canvas'
import Icon from '@components/icon'

const Home = () => (
  <Page>
    <BackgroundCanvas id='canvas' />

    <main data-page='index'>
      <article className='deck'>
        <section className='card'>
          <ExportedImage
            src='/img/kevin.png'
            alt="Kevin' picture"
            width='500px'
            height='500px'
            layout='raw'
          />
          <h1>Kevin Romero Peces-Barba</h1>
          <nav>
            <a
              id='mail_card'
              href=''
              rel='noreferrer'
              target='_blank'
              aria-label='Link to send Kevin an email.'
            >
              <Icon name='email' />
              Email
            </a>
            <a
              href='https://github.com/kevinrpb'
              rel='noreferrer'
              target='_blank'
              aria-label="Link to Kevin's Github profile."
            >
              <Icon name='github' />
              GitHub
            </a>
            <a
              href='https://twitter.com/kevinrpb'
              rel='noreferrer'
              target='_blank'
              aria-label="Link to Kevin's Github profile."
            >
              <Icon name='twitter' />
              Twitter{' '}
            </a>
            <a href='https://cv.kevinrpb.me' aria-label="Link to Kevin's resume page.">
              <Icon name='resume' />
              Resume
            </a>
            {/* <a
              href="https://projects.kevinrpb.me"
              aria-label="Link to Kevin's projects page."
            ><Icon name="" />Projects</a> */}
            {/* <a
              href="https://blog.kevinrpb.me"
              aria-label="Link to Kevin's blog."
            ><Icon name="" />Blog</a> */}
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
