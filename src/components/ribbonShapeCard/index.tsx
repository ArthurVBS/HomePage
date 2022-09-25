import React from 'react'
import {
  Container,
  Content,
  ContentBox,
  Icon,
  Link,
  RibbonShape,
  Title,
} from './styles'

type Props = {
  title: string
  icon: string
}

const RibbonShapeCard: React.FC<Props> = ({ title, icon }) => {
  return (
    <Container>
      {/* data-aos="fade-right"*/}
      <RibbonShape>
        <Title>{title}</Title>
      </RibbonShape>
      <Icon className={icon}></Icon>
      <ContentBox></ContentBox>
    </Container>
  )
}

export default RibbonShapeCard
