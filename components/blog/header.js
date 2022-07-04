import React from 'react'

import SaneLink from '@components/link'
import Icon from '@components/icon'

const BlogHeader = (props) => (
  <header {...props}>
    <SaneLink href='/' className=''>
      <Icon name='home' />
      Home
    </SaneLink>

    <nav>
      <SaneLink href='/blog' className=''>
        <Icon name='blog' />
        Blog
      </SaneLink>
    </nav>
  </header>
)

export default BlogHeader
