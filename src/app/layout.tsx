import React, { PropsWithChildren } from 'react'

import './globals.css'

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <html lang='en'>
    <body className='bg-ebony-clay'>{children}</body>
  </html>
)

export default RootLayout
