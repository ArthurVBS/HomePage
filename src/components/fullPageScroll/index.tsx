import React from 'react'
import { technologiesType } from '../../types/technologies'
import { Container, Text, Section, Image, Title, Description } from './styles'

type Props = {
  techs: technologiesType[]
}

const FullPageScroll: React.FC<Props> = ({ techs }) => {
  const displayTechs = () => {
    return techs.map((tech, index) => {
      return (
        <Section key={index}>
          <Text>
            <Title>
              {tech.title} <i className={tech.fontAwesomeIcon}></i>
            </Title>
            <Description>{tech.description}</Description>
          </Text>
          <Image src={tech.image} alt="Undraw Art" />
        </Section>
      )
    })
  }

  return <Container>{displayTechs()}</Container>
}

export default FullPageScroll
