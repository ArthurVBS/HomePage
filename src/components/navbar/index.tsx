import React from 'react'
import { useNavbar } from '../../contexts/NavbarContext'
import { Button, Container } from './styles'

const Navbar: React.FC = () => {
  const { active, setActive } = useNavbar()
  const toggleActive = (newState: string) => {
    setActive(newState)
  }

  return (
    <Container>
      <Button active={active == 'home'} onClick={() => toggleActive('home')}>
        <span>
          <i className="fas fa-home"></i>
          Hello ^^
        </span>
        <i className="fas fa-arrow-right"></i>
      </Button>

      <Button active={active == 'repo'} onClick={() => toggleActive('repo')}>
        <span>
          <i className="fas fa-laptop-code"></i>
          Repositories
        </span>
        <i className="fas fa-arrow-right"></i>
      </Button>

      <Button
        active={active == 'knowledge'}
        onClick={() => toggleActive('knowledge')}
      >
        <span>
          <i className="fas fa-brain"></i>
          Knowledge
        </span>
        <i className="fas fa-arrow-right"></i>
      </Button>

      <Button active={active == 'tech'} onClick={() => toggleActive('tech')}>
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
