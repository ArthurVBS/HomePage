import React from 'react'
import Avatar from '../avatar'
import { Container, Name } from './styles'

const Card: React.FC = () => {
  return (
    <Container>
      <Avatar />
      <Name>@ArthurVBS</Name>
    </Container>
  )
}

export default Card
