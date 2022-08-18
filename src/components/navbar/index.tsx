import React from 'react'
import { Button, Container } from './styles'

const Navbar: React.FC = () => {
  const isActive = {
    home: false,
    repo: false,
    knowledge: true,
    tech: false,
  }

  return (
    <Container>
      <Button active={isActive.home}>
        <span>
          <i className="fas fa-home"></i>
          Hello ^^
        </span>
        <i className="fas fa-arrow-right"></i>
      </Button>
      <Button active={isActive.repo}>
        <span>
          <i className="fas fa-laptop-code"></i>
          Repositories
        </span>
        <i className="fas fa-arrow-right"></i>
      </Button>
      <Button active={isActive.knowledge}>
        <span>
          <i className="fas fa-brain"></i>
          Knowledge
        </span>
        <i className="fas fa-arrow-right"></i>
      </Button>
      <Button active={isActive.tech}>
        <span>
          <i className="fas fa-tools"></i>
          Technologies
        </span>
        <i className="fas fa-arrow-right"></i>
      </Button>
    </Container>
  )
}

export default Navbar
