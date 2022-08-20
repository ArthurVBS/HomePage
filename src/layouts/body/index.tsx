import React from 'react'

import Avatar from '../../components/avatar'
import Navbar from '../../components/navbar'
import Footer from '../footer'
import Header from '../header'

import Home from '../home'
import Knowledge from '../knowledge'
import Repo from '../repo'
import Tech from '../tech'

import { useNavbar } from '../../contexts/NavbarContext'
import { Container, LeftBox, RightBox } from './styles'
import Card from '../../components/card'

const Body: React.FC = () => {
  const { active } = useNavbar()

  const renderContent = () => {
    switch (active) {
      case 'home':
        return <Home />
      case 'repo':
        return <Repo />
      case 'knowledge':
        return <Knowledge />
      case 'tech':
        return <Tech />
      default:
        return <Home />
    }
  }

  return (
    <Container>
      <LeftBox>
        <Header />
        <Card />
        <Navbar />
      </LeftBox>
      <RightBox>
        {renderContent()}
        <Footer />
      </RightBox>
    </Container>
  )
}

export default Body
