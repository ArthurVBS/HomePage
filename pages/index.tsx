import React, { useEffect } from 'react'
import type { NextPage } from 'next'

import Aos from 'aos'
import Header from '../src/components/header'
import Footer from '../src/components/footer'
import AboutSection from '../src/layouts/about-section'
import ContactSection from '../src/layouts/contact-section'
import Head from '../src/components/head'

const Home: NextPage = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true })
  })

  return (
    <>
      <Head title="Arthur Silva" />
      <Header />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default Home
