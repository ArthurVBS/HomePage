import React from 'react'
import ToggleNavbar from '../../components/toggleNavbar'
import { Container } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <ToggleNavbar />
    </Container>
  )
}

export default Header
