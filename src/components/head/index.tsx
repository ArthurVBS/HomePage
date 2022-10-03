import React from 'react'
import NextHead from 'next/head'

type Props = {
  title: string
}

const Head: React.FC<Props> = ({ title }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <link rel="icon" type="image/png" href="/favicon.png" />
    </NextHead>
  )
}

export default Head
