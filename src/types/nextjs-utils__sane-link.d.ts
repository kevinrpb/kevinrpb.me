declare module '@nextjs-utils/sane-link' {
  import React from 'react'

  interface SaneLinkProps extends React.HTMLProps<HTMLAnchorElement> {}

  const SaneLink: React.FC<SaneLinkProps>

  export default SaneLink
}
