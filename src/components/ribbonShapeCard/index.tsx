import React from 'react'
import { Container, Content, ContentBox, RibbonShape, Title } from './styles'

type Props = {
  title: string
  content: string
}

const RibbonShapeCard: React.FC<Props> = ({ title, content }) => {
  return (
    <Container>
      <RibbonShape>
        <Title>{title}</Title>
      </RibbonShape>
      <ContentBox>
        <Content>{content}</Content>
      </ContentBox>
    </Container>
  )
}

export default RibbonShapeCard
