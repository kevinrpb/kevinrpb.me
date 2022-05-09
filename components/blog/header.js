import React from 'react'

import SaneLink from '@components/link'

const BlogHeader = (props) => (
  <header {...props}>
    <nav>
      <SaneLink href='/blog' className=''>
        Blog
      </SaneLink>
    </nav>
  </header>
)

export default BlogHeader
