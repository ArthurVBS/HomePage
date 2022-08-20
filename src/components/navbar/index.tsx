import React from 'react'
import { useNavbar } from '../../contexts/NavbarContext'
import { ArrowIcon, Button, Container } from './styles'

const Navbar: React.FC = () => {
  const { active, setActive, isOpen, setIsOpen } = useNavbar()

  const handleClick = (newState: string) => {
    setActive(newState)
  }

  const closeSidebar = () => {
    setIsOpen(false)
    window.scrollTo(0, 0)
  }

  return (
    <Container isOpen={isOpen} onClick={() => closeSidebar()}>
      <Button active={active == 'home'} onClick={() => handleClick('home')}>
        <span>
          <i className="fas fa-home"></i>
          Hello ^^
        </span>
        <ArrowIcon className="fas fa-arrow-right"></ArrowIcon>
      </Button>

      <Button active={active == 'repo'} onClick={() => handleClick('repo')}>
        <span>
          <i className="fas fa-laptop-code"></i>
          Repositories
        </span>
        <ArrowIcon className="fas fa-arrow-right"></ArrowIcon>
      </Button>

      <Button
        active={active == 'knowledge'}
        onClick={() => handleClick('knowledge')}
      >
        <span>
          <i className="fas fa-brain"></i>
          Knowledge
        </span>
        <ArrowIcon className="fas fa-arrow-right"></ArrowIcon>
      </Button>

      <Button active={active == 'tech'} onClick={() => handleClick('tech')}>
        <span>
          <i className="fas fa-tools"></i>
          Technologies
        </span>
        <ArrowIcon className="fas fa-arrow-right"></ArrowIcon>
      </Button>
    </Container>
  )
}

export default Navbar
