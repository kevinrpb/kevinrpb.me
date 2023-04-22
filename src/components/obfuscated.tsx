'use client'

import React from 'react'

// From http://www.jottings.com/obfuscator/
export const decodeObfuscated = (encodedText: string, key: string): string => {
  let decodedText = ''
  let ltr: number | string = ''
  let shift = encodedText.length

  for (let i = 0; i < encodedText.length; i++) {
    if (key.indexOf(encodedText.charAt(i)) == -1) {
      ltr = encodedText.charAt(i)
      decodedText += ltr
    } else {
      ltr = (key.indexOf(encodedText.charAt(i)) - shift + key.length) % key.length
      decodedText += key.charAt(ltr)
    }
  }

  return decodedText
}

interface BaseObfuscatedProps {
  encodedText: string
  key: string
}

interface ObfuscatedTextProps extends BaseObfuscatedProps {}

export const ObfuscatedText: React.FC<ObfuscatedTextProps> = ({ encodedText, key }) => {
  const [text, setText] = React.useState('')

  React.useEffect(() => {
    const decodedText = decodeObfuscated(encodedText, key)

    setText(decodedText)
  }, [encodedText, key])

  return <>{text}</>
}

interface ObfuscatedComponentProps extends BaseObfuscatedProps {
  getComponent: React.FC<{ text: string }>
}

export const ObfuscatedComponent: React.FC<ObfuscatedComponentProps> = ({
  encodedText,
  key,
  getComponent,
}) => {
  const [text, setText] = React.useState('')

  React.useEffect(() => {
    if (!encodedText || !key) {
      return
    }

    const decodedText = decodeObfuscated(encodedText, key)

    setText(decodedText)
  }, [encodedText, key])

  return <>{getComponent({ text })}</>
}
