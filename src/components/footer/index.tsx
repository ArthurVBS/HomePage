import React from 'react'
import { Box, Button, Container, Link, Text } from './styles'

const Footer: React.FC = () => {
  const handleClick = () => {
    window.scrollTo(0, 0)
  }

  return (
    <Container>
      <Box>
        <Link
          href="http://github.com/ArthurVBS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </Link>
        <Link
          href="https://linkedin.com/in/arthurvbs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </Link>
        <Button onClick={() => handleClick()}>
          <i className="fas fa-angle-up"></i>
        </Button>
      </Box>
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
