import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ArthurVBS' | Home Page</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <header>Hello</header>
      <img
        src="https://avatars.githubusercontent.com/u/84406367?v=4"
        alt="Arthur's picture"
      />
    </>
  )
}

export default Home
