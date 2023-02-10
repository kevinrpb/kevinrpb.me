import React from 'react'

const Error404 = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center'
    }}
  >
    <div>
      <h1
        className='next-error-h1'
        style={{
          display: 'inline-block',
          margin: 0,
          marginRight: '20px',
          padding: '0 23px 0 0',
          fontSize: '24px',
          fontWeight: 500,
          verticalAlign: 'top',
          lineHeight: '49px',
        }}
      >
        404
      </h1>
      <div
        style={{
          display: 'inline-block',
          textAlign: 'left',
          lineHeight: '49px',
          height: '49px',
          verticalAlign: 'middle'
        }}
      >
        <h2
          style={{
            margin: 0,
            padding: 0,
            fontSize: '14px',
            fontWeight: 'normal',
            lineHeight: '49px'
          }}
        >
          This page could not be found.
        </h2>
      </div>
    </div>
  </div>
)

export default Error404
