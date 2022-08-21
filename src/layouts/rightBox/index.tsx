import React from 'react'
import { Container } from './styles'

import { useNavbar } from '../../contexts/NavbarContext'

import Home from '../../pages/home'
import Knowledge from '../../pages/knowledge'
import Repo from '../../pages/repo'
import Tech from '../../pages/tech'
import Footer from '../footer'

const RightBox: React.FC = () => {
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
      {renderContent()}
      <Footer />
    </Container>
  )
}

export default RightBox
