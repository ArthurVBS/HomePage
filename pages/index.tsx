import React, { useEffect } from 'react'
import type { NextPage } from 'next'

import Aos from 'aos'

const Home: NextPage = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true })
  })

  return <p>Hello</p>
}

export default Home
