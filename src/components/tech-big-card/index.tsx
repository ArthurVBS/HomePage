import React from 'react'

import { TechAreaType } from '../../types/tech-area'
import { Container, Description, IconLogo, Title } from './styles'

type Props = {
  tech: TechAreaType
}

const TechCard: React.FC<Props> = ({ tech }) => {
  return (
    <Container>
      <IconLogo>
        <i className={tech.icon}></i>
      </IconLogo>
      <Title>{tech.title}</Title>
      <Description>{tech.description}</Description>
    </Container>
  )
}

export default TechCard
