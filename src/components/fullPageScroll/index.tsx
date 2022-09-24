import React from 'react'
import { technologiesType } from '../../types/technologies'
import { Container, Text, Section, Image } from './styles'

type Props = {
  techs: technologiesType[]
}

const FullPageScroll: React.FC<Props> = ({ techs }) => {
  const displayTechs = () => {
    return techs.map((tech, index) => {
      return (
        <Section key={index}>
          <Text>
            <h1>{tech.title}</h1>
            <p>{tech.description}</p>
          </Text>
          <Image src={tech.image} alt="Undraw Art" />
        </Section>
      )
    })
  }

  return <Container>{displayTechs()}</Container>
}

export default FullPageScroll
