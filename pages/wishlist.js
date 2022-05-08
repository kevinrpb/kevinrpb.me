import React from 'react'

import ExportedImage from 'next-image-export-optimizer'

import Page from '@layouts/page'
import BackgroundCanvas from '@components/background-canvas'
import Icon from '@components/icon'

import wishlist from '@data/wishlist.json'

const ItemCard = ({ imgSrc, imgAlt, title, links }) => (
  <section className='card item'>
    <ExportedImage src={imgSrc} alt={imgAlt} width='500px' height='500px' layout='raw' />
    <h2>{title}</h2>
    <nav>
      {links.map(({ site, icon, url }) => (
        <a key={url} href={url} target='_blank' rel='noreferrer'>
          <Icon name={icon} />
          {site}
        </a>
      ))}
    </nav>
  </section>
)

const Wishlist = () => (
  <Page>
    <BackgroundCanvas id='canvas' />

    <main data-page='wishlist'>
      <article className='deck'>
        {wishlist.map((data) => (
          <ItemCard key={data.title} {...data} />
        ))}
      </article>
    </main>
  </Page>
)

export default Wishlist
