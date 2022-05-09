import React from 'react'

import { MDXRemote } from 'next-mdx-remote'

import 'highlight.js/styles/atom-one-dark-reasonable.css'

import Page from '@layouts/page'
import BlogHeader from '@components/blog/header'
import { getAllSlugs, getPost } from '@lib/blog'

export const getStaticPaths = async () => {
  const slugs = await getAllSlugs()
  const paths = slugs.map((slug) => ({ params: { slug: slug.split('/') } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params
  const { mdx, meta } = await getPost(slug.join('/'))

  return {
    props: { mdx, meta },
  }
}

const BlogPost = ({ mdx, meta }) => (
  <Page>
    <BlogHeader data-page='blog-post' />

    <main data-page='blog-post'>
      <h1>{meta.title}</h1>

      <MDXRemote {...mdx} />
    </main>
  </Page>
)

export default BlogPost
