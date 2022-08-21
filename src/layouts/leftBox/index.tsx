import React from 'react'
import { Container, SFooter, SLink } from './styles'

import Card from '../../components/card'
import Navbar from '../../components/navbar'
import Header from '../header'

const LeftBox: React.FC = () => {
  return (
    <Container>
      <Header />

      <div>
        <Card />
        <Navbar />
      </div>

      <SFooter>
        <SLink
          href="https://github.com/ArthurVBS"
          target="_blank"
          rel="external noreferrer"
        >
          Github
        </SLink>
        <SLink
          href="https://linkedin.com/in/arthurvbs/"
          target="_blank"
          rel="external noreferrer"
        >
          LinkedIn
        </SLink>
      </SFooter>
    </Container>
  )
}

export default LeftBox
