import React from 'react'

import ExportedImage from 'next-image-export-optimizer'
import Icon from '@nextjs-utils/dynamic-icon'

import Page from '@layouts/page'

import wishlist from '@data/wishlist.json'

const ItemCard = ({ imgSrc, imgAlt, title, links }) => (
  <section className='card item'>
    <ExportedImage
      src={imgSrc}
      alt={imgAlt}
      width='500'
      height='500'
      layout='raw'
      useWebp={process.env.nextImageExportOptimizer_storePicturesInWEBP}
    />
    <h2>{title}</h2>
    <nav>
      {links.map(({ site, icon, url }) => (
        <a key={url} href={url} target='_blank' rel='noreferrer'>
          <Icon name={icon} className='icon' />
          {site}
        </a>
      ))}
    </nav>
  </section>
)

const Wishlist = () => (
  <Page>
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
