import React from 'react'

import Page from '@layouts/page'
import BlogHeader from '@components/blog/header'

export const getStaticPaths = async () => {
  const categories = ['test']
  const paths = categories.map((category) => ({ params: { category } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const { category } = params

  return {
    props: { category },
  }
}

const BlogCategory = ({ category }) => (
  <Page>
    <BlogHeader data-page='blog-category' />

    <main data-page='blog-category'>
      <h1>{category}</h1>
    </main>
  </Page>
)

export default BlogCategory
