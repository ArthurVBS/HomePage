import React from 'react'

import { TechType } from '../../types/tech'
import { Container, Description, IconLogo, Title } from './styles'

type Props = {
  tech: TechType
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
