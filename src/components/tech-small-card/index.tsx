import React from 'react'
import { TechType } from '../../types/tech'
import { Container, Icon, Title } from './styles'

type Props = {
  tech: TechType
}

const TechSmallCard: React.FC<Props> = ({ tech }) => {
  return (
    <Container>
      <Icon src={tech.icon} alt="Tech logo" />
      <Title>{tech.title}</Title>
    </Container>
  )
}

export default TechSmallCard
