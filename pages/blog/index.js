import React from 'react'

import Link from '@nextjs-utils/sane-link'

import Page from '@layouts/page'
import BlogHeader from '@components/blog/header'
import { getAllPostsMeta } from '@lib/blog'

export const getStaticProps = async () => {
  const posts = await getAllPostsMeta()

  return {
    props: { posts },
  }
}

const PostItem = ({ slug, title }) => (
  <Link href={`/blog/post/${slug}`}>
    <article>
      <h1>{title}</h1>
    </article>
  </Link>
)

const BlogHome = ({ posts }) => (
  <Page>
    <BlogHeader data-page='blog-home' />

    <main data-page='blog-home'>
      {posts.map((meta) => (
        <PostItem key={meta.slug} {...meta} />
      ))}
    </main>
  </Page>
)

export default BlogHome
