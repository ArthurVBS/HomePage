import React from 'react'
import { Button, Container, Link, LinkWrapper, Text } from './styles'

const Footer: React.FC = () => {
  const handleClick = () => {
    window.scrollTo(0, 0)
  }

  return (
    <Container>
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

      <LinkWrapper>
        <Link
          href="https://github.com/ArthurVBS"
          target="_blank"
          rel="external noreferrer"
        >
          <i className="fab fa-github"></i>
        </Link>

        <Link
          href="https://linkedin.com/in/arthurvbs/"
          target="_blank"
          rel="external noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </Link>

        <Button onClick={() => handleClick()}>
          <i className="fas fa-angle-up"></i>
        </Button>
      </LinkWrapper>
    </Container>
  )
}

export default Footer
