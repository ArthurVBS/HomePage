import React, { useEffect } from 'react'
import type { NextPage } from 'next'

import Aos from 'aos'
import Head from '../src/components/head'
import Body from '../src/layouts/body'

const Home: NextPage = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true })
  })

  return (
    <>
      <Head title="ArthurVBS | Home Page" />
      <Body />
    </>
  )
}

export default Home
