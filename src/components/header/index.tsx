import React from 'react'
import NavBar from '../navbar'
import ToggleNavBar from '../toggle-navbar'
import { Container, Logo } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Logo href="#">&lt; Arthur V.B.S &gt;</Logo>
      <NavBar />
      <ToggleNavBar />
    </Container>
  )
}

export default Header
