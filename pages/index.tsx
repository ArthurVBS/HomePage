import type { NextPage } from 'next'

import Avatar from '../src/components/avatar'
import Head from '../src/components/head'
import Footer from '../src/layouts/footer'
import Header from '../src/layouts/header'

const Home: NextPage = () => {
  return (
    <>
      <Head title="ArthurVBS | Home Page" />
      <Header />
      <Avatar />
      <Footer />
    </>
  )
}

export default Home
