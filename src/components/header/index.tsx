import React from 'react'
import {
  Container,
  ExternalLink,
  InternalLink,
  LinkWrapper,
  Logo,
} from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>&lt; Arthur V.B.S &gt;</Logo>

      <LinkWrapper>
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
        <InternalLink href="#">contact</InternalLink>
      </LinkWrapper>
    </Container>
  )
}

export default Header
