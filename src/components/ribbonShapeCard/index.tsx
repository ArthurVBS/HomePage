import React from 'react'
import {
  Container,
  Content,
  ContentBox,
  Icon,
  RibbonShape,
  Title,
} from './styles'

type Props = {
  title: string
  content: string
  icon: string
}

const RibbonShapeCard: React.FC<Props> = ({ title, content, icon }) => {
  return (
    <Container data-aos="fade-up">
      <RibbonShape>
        <Title>{title}</Title>
      </RibbonShape>
      <Icon className={icon}></Icon>
      <ContentBox>
        <Content>{content}</Content>
      </ContentBox>
    </Container>
  )
}

export default RibbonShapeCard
