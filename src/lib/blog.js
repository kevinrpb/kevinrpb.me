import path from 'path'
import fs from 'fs'

import matter from 'gray-matter'
import readingTime from 'reading-time'
import { sync } from 'glob'

import { serialize } from 'next-mdx-remote/serialize'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import rehypeCodeTitles from 'rehype-code-titles'

const postsDir = path.join(process.cwd(), 'posts')

export const getAllSlugs = async () => {
  const paths = sync(`${postsDir}/**/*.mdx`)

  const slugs = paths.map((path) => {
    const slug = path
      .replace(postsDir, '')
      .replace(/\.mdx$/, '')
      .replace(/^\//, '')

    return slug
  })

  return slugs
}

export const getPost = async (slug) => {
  const postPath = path.join(postsDir, `${slug}.mdx`)
  const source = await fs.promises.readFile(postPath, 'utf8')

  const { content, data } = matter(source)
  const mdx = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ['anchor'] },
          },
          { behaviour: 'wrap' },
        ],
        rehypeHighlight,
        rehypeCodeTitles,
      ],
    },
  })

  return {
    mdx,
    meta: {
      slug,
      readTime: Math.ceil(readingTime(source).minutes),
      ...data,
    },
  }
}

export const getAllPosts = async () => {
  const slugs = await getAllSlugs()
  const posts = slugs.map(async (slug) => await getPost(slug))

  return await Promise.all(posts)
}

export const getAllPostsMeta = async () => {
  const posts = await getAllPosts()
  const metas = posts.map(({ meta }) => meta)

  return metas
}
