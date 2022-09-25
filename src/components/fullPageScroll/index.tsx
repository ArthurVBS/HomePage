import React from 'react'
import { technologiesType } from '../../types/technologies'
import {
  Container,
  Text,
  Section,
  Image,
  Title,
  Description,
  Nav,
  Link,
} from './styles'

type Props = {
  techs: technologiesType[]
}

const FullPageScroll: React.FC<Props> = ({ techs }) => {
  const displayNav = () => {
    return (
      <Nav>
        {techs.map((tech, index) => {
          return (
            <Link href={`#${tech.title}`} key={index}>
              <i className={tech.fontAwesomeIcon}></i>
            </Link>
          )
        })}
      </Nav>
    )
  }

  const displayTechs = () => {
    return techs.map((tech, index) => {
      return (
        <Section key={index} id={`${tech.title}`}>
          {displayNav()}
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
