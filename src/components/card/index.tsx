import React from 'react'
import { Avatar, Container, Name } from './styles'

const Card: React.FC = () => {
  return (
    <Container data-aos="fade-up">
      <Avatar
        src="https://avatars.githubusercontent.com/u/84406367?v=4"
        alt="Arthur's picture"
      />
      <Name>@ArthurVBS</Name>
    </Container>
  )
}

export default Card
