import React from 'react'
import { Container, Image, Title } from './styles'

const AboutCard: React.FC = () => {
  return (
    <Container>
      <Title>
        I'm a <span>full-stack developer</span> and I'm a university student
        based in <span>Recife, Brazil.</span>
      </Title>
      <Image
        src="https://avatars.githubusercontent.com/u/84406367?v=4"
        alt="avatar"
      />
    </Container>
  )
}

export default AboutCard
