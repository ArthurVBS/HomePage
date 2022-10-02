import React from 'react'
import { Container } from './styles'

import { useNavbar } from '../../contexts/NavbarContext'
import NavItem from '../navitem'

const Navbar: React.FC = () => {
  const { isOpen, setIsOpen } = useNavbar()

  const closeSidebar = () => {
    setIsOpen(false)
    window.scrollTo(0, 0)
  }

  return (
    <Container isOpen={isOpen} onClick={() => closeSidebar()}>
      <NavItem title="Home" icon="fas fa-home" item="home" />
      <NavItem title="Repositories" icon="fas fa-laptop-code" item="repo" />
      <NavItem title="Technologies" icon="fas fa-tools" item="tech" />
    </Container>
  )
}

export default Navbar
