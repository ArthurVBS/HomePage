import React, { useEffect } from 'react'
import type { NextPage } from 'next'

import Aos from 'aos'
import Head from '../src/components/head'
import Header from '../src/components/header'
import Footer from '../src/components/footer'

import AboutSection from '../src/layouts/about-section'
import ContactSection from '../src/layouts/contact-section'
import TechSection from '../src/layouts/tech-section'
import RepoSection from '../src/layouts/repo-section'

const Home: NextPage = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true })
  })

  return (
    <>
      <Head title="Arthur V.B.S" />
      <Header />
      <AboutSection />
      <TechSection />
      <RepoSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default Home
