import React, { PropsWithChildren } from 'react'

import BackgroundCanvas from '@/components/background-canvas'

import './globals.css'

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <html lang='en'>
    <body className='bg-ebony-clay'>
      <BackgroundCanvas className='fixed' />
      {children}
    </body>
  </html>
)

export default RootLayout
