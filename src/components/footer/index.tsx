import React from 'react'
import { Container, ExternalLink, LinkWrapper, Text } from './styles'

const Footer: React.FC = () => {
  return (
    <Container>
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
      </LinkWrapper>
      <Text>
        Made with <span>♡</span> by{' '}
        <a
          href="https://github.com/ArthurVBS/HomePage"
          target="_blank"
          rel="external noreferrer"
        >
          Arthur V.B.S.
        </a>
      </Text>
    </Container>
  )
}

export default Footer
