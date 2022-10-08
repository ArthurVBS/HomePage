import React from 'react'
import TechContainer from '../../components/tech-container'
import { Container } from './styles'

const TechSection: React.FC = () => {
  return (
    <Container id="techs">
      <TechContainer />
    </Container>
  )
}

export default TechSection
