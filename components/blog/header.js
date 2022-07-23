import React from 'react'

import Icon from '@nextjs-utils/dynamic-icon'
import Link from '@nextjs-utils/sane-link'

const BlogHeader = (props) => (
  <header {...props}>
    <Link href='/' className=''>
      <Icon name='home' className='icon' />
      Home
    </Link>

    <nav>
      <Link href='/blog' className=''>
        <Icon name='blog' className='icon' />
        Blog
      </Link>
    </nav>
  </header>
)

export default BlogHeader
