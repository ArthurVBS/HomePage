import React from 'react'
import RibbonShapeCard from '../../components/ribbonShapeCard'
import { Container, WrapperRibbonShapeCards } from './styles'

const Knowledge: React.FC = () => {
  return (
    <Container>
      <p>Knowledge</p>

      <WrapperRibbonShapeCards>
        <RibbonShapeCard title="Olá" content="lorem ipsum" />
        <RibbonShapeCard title="Hello" content="lorem ipsum dolor" />
        <RibbonShapeCard title="Hi there" content="lorem ipsum dolor" />
        <RibbonShapeCard title="Hey ^^" content="lorem ipsum dolor" />
      </WrapperRibbonShapeCards>
    </Container>
  )
}

export default Knowledge
