import React from 'react'

import Image from 'next/image'

import BackgroundCanvas from '@/components/background-canvas'
import { SimpleCardLink } from '@/components/card-link'

export const metadata = {
  title: 'Kevin Romero Peces-Barba',
}

const Card: React.FC<React.PropsWithChildren> = ({ children, ...rest }) => (
  <article
    className='md:w-[76vw] lg:w-[67vw] xl:w-[56vw] max-w-[1000px] flex flex-col m-4 p-8 md:p-12 gap-8 rounded bg-white bg-opacity-50 backdrop-blur drop-shadow-xl'
    {...rest}
  >
    {children}
  </article>
)

const HomePage = () => (
  <>
    <BackgroundCanvas className='fixed -z-10' />

    <main className='min-h-[100vh] flex flex-col items-center md:justify-center pt-2'>
      <Card>
        <section className='grid grid-cols-1 md:grid-cols-home-card md:grid-rows-home-card gap-4 md:gapx-4 xl:gap-0 items-center justify-center'>
          <Image
            className='w-40 md:w-full lg:w-40 xl:w-60 col-start-1 col-span-1 row-start-1 md:row-span-4 mx-auto my-4 rounded-full border-8 border-space-cadet drop-shadow-xl'
            src='/images/kevin.png'
            alt="Kevin' picture"
            width='500'
            height='500'
          />
          <h1 className='col-start-1 md:col-start-2 col-span-1 md:row-start-2 row-span-1 text-3xl lg:text-4xl xl:text-5xl text-center font-bold text-gray-800'>Kevin Romero Peces-Barba</h1>
          <nav className='col-start-1 md:col-start-2 col-span-1 md:row-start-3 row-span-1 flex flex-row flex-wrap gap-y-2 lg:p-4 items-center justify-around'>
            <SimpleCardLink
              id='mail_card'
              href='#'
              // href={`mailto:${getEmailAddress()}`}
              label='Email'
              icon='FiAtSign'
              ariaLabel='Link to send Kevin an email.'
            />
            <SimpleCardLink
              href='https://github.com/kevinrpb'
              label='GitHub'
              icon='FiGithub'
              ariaLabel="Link to Kevin's Github profile."
            />
            <SimpleCardLink
              href='https://mastodon.social/@kevinrpb'
              label='Masto'
              icon='FaMastodon'
              ariaLabel="Link to Kevin's Mastodon profile."
            />
            <SimpleCardLink
              href='/cv'
              label='Resume'
              icon='FiFileText'
              ariaLabel="Link to Kevin's resume page."
            />
            {/* <CardLink
              href='/blog'
              className='pill button shadow'
              aria-label="Link to Kevin's blog."
            >
              <Icon name='FaBlog' className='icon' />
              Blog
            </CardLink> */}
            {/*<CardLink
              href='/portfolio'
              className='pill button shadow'
              aria-label="Link to Kevin's portfolio."
            >
              <Icon name='FaFolder' className='icon' />
              Portfolio
            </CardLink> */}
          </nav>
        </section>

        <section className='prose max-w-none'>
          <p>
            Hi! This is Kevin 😀. I&apos;m a CS geek from Spain. You can see what I&apos;m up to in
            my <a href='https://github.com/kevinrpb'>GitHub</a> or{' '}
            <a href='https://twitter.com/kevinrpb'>Twitter</a> profiles.
          </p>
        </section>
      </Card>
    </main>
  </>
)

export default HomePage
