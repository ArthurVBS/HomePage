import React from 'react'

import { Container } from './styles'
import { TechType } from '../../types/tech'
import TechCard from '../tech-card'

const TechContainer: React.FC = () => {
  const techData = require('../../data/techs.json') as TechType[]

  const showTechs = () => {
    return techData.map(tech => {
      return <TechCard key={tech.id} tech={tech} />
    })
  }

  return <Container>{showTechs()}</Container>
}

export default TechContainer
