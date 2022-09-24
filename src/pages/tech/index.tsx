import React from 'react'
import { Container } from './styles'

import { technologiesType } from '../../types/technologies'
import FullPageScroll from '../../components/fullPageScroll'

const Tech: React.FC = () => {
  const technologiesData =
    require('../../data/technologies.json') as technologiesType[]

  return (
    <Container>
      <FullPageScroll techs={technologiesData} />
    </Container>
  )
}

export default Tech
