import React from 'react'
import { Container } from './styles'

import LeftBox from '../leftBox'
import RightBox from '../rightBox'

const Body: React.FC = () => {
  return (
    <Container>
      <LeftBox />
      <RightBox />
    </Container>
  )
}

export default Body
