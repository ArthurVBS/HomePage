import React from 'react'
import Carousel from '../../components/carousel'
import { Container } from './styles'

const Repo: React.FC = () => {
  return (
    <Container>
      <Carousel responsive={{ 0: { items: 1 } }}>
        <div className="item" data-value="1">
          1
        </div>
        <div className="item" data-value="2">
          2
        </div>
        <div className="item" data-value="3">
          3
        </div>
      </Carousel>
    </Container>
  )
}

export default Repo
