import React from 'react'
import type { NextPage } from 'next'

import Head from '../src/components/head'
import Body from '../src/layouts/body'

const Home: NextPage = () => {
  return (
    <>
      <Head title="ArthurVBS | Home Page" />
      <Body />
    </>
  )
}

export default Home
