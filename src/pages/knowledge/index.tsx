import React from 'react'
import RibbonShapeCard from '../../components/ribbonShapeCard'
import { Container, WrapperRibbonShapeCards } from './styles'

const Knowledge: React.FC = () => {
  return (
    <Container>
      <p>Knowledge</p>

      <WrapperRibbonShapeCards>
        <RibbonShapeCard
          title="Olá"
          content="lorem ipsum"
          icon="fas fa-database"
        />
        <RibbonShapeCard
          title="Hello"
          content="lorem ipsum dolor"
          icon="fab fa-aws"
        />
        <RibbonShapeCard
          title="Hi there"
          content="lorem ipsum dolor"
          icon="fab fa-js-square"
        />
        <RibbonShapeCard
          title="Hey ^^"
          content="lorem ipsum dolor"
          icon="fab fa-java"
        />
      </WrapperRibbonShapeCards>
    </Container>
  )
}

export default Knowledge
