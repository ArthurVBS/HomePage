import React from 'react'
import { useNavbar } from '../../contexts/navbar-context'
import { Container } from './styles'

const ToggleNavBar: React.FC = () => {
  const { isOpen, setIsOpen } = useNavbar()

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Container onClick={() => handleClick()}>
      <i className="fas fa-bars"></i>
    </Container>
  )
}

export default ToggleNavBar
