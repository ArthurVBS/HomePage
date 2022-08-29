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
  content: string
  icon: string
  link: string
}

const RibbonShapeCard: React.FC<Props> = ({ title, content, icon, link }) => {
  return (
    <Container data-aos="fade-up">
      <RibbonShape>
        <Title>{title}</Title>
      </RibbonShape>
      <Icon className={icon}></Icon>
      <ContentBox>
        <Content>{content}</Content>
        <Link href={link} target="_blank">
          Github <i className="fab fa-github"></i>Repo
        </Link>
      </ContentBox>
    </Container>
  )
}

export default RibbonShapeCard
