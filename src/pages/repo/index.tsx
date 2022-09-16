import React from 'react'
import Carousel from '../../components/carousel'
import { Container } from './styles'

const Repo: React.FC = () => {
  return (
    <Container>
      <h1>Repositories</h1>

      <Carousel responsive={{ 0: { items: 1 } }}>
        <div className="item" data-value="1">
          Project One
        </div>
        <div className="item" data-value="2">
          Project Two
        </div>
        <div className="item" data-value="3">
          Project Three
        </div>
      </Carousel>
    </Container>
  )
}

export default Repo
