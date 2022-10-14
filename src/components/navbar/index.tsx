import React from 'react'
import { useNavbar } from '../../contexts/navbar-context'
import {
  Container,
  ExternalLink,
  ExternalLinkWrapper,
  InternalLink,
  InternalLinkWrapper,
} from './styles'

const NavBar: React.FC = () => {
  const { isOpen, setIsOpen } = useNavbar()

  const closeSidebar = () => {
    setIsOpen(false)
    window.scrollTo(0, 0)
  }

  return (
    <Container isOpen={isOpen} onClick={() => closeSidebar()}>
      <InternalLinkWrapper>
        <InternalLink href="#techs">Techs</InternalLink>
        <InternalLink href="#repos">Repos</InternalLink>
        <InternalLink href="#contact">Contact</InternalLink>
      </InternalLinkWrapper>

      <ExternalLinkWrapper>
        <ExternalLink
          href="http://github.com/ArthurVBS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </ExternalLink>
        <ExternalLink
          href="https://linkedin.com/in/arthurvbs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </ExternalLink>
      </ExternalLinkWrapper>
    </Container>
  )
}

export default NavBar
