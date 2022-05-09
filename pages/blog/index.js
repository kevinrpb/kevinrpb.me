import React from 'react'

import Page from '@layouts/page'
import BlogHeader from '@components/blog/header'
import { getAllPostsMeta } from '@lib/blog'
import SaneLink from '@components/link'

export const getStaticProps = async () => {
  const posts = await getAllPostsMeta()

  return {
    props: { posts },
  }
}

const PostItem = ({ slug, title }) => (
  <SaneLink href={`/blog/post/${slug}`}>
    <article>
      <h1>{title}</h1>
    </article>
  </SaneLink>
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
