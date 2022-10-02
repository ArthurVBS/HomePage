import React, { useEffect } from 'react'
import type { NextPage } from 'next'

import Aos from 'aos'
import Header from '../src/components/header'
import Footer from '../src/components/footer'

const Home: NextPage = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true })
  })

  return (
    <>
      <Header />
      <Footer />
    </>
  )
}

export default Home
