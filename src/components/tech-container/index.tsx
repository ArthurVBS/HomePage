import React from 'react'
import { BigCardWrapper, Container, SmallCardWrapper } from './styles'

import { TechType } from '../../types/tech'
import { TechAreaType } from '../../types/tech-area'
import TechBigCard from '../tech-big-card'
import TechSmallCard from '../tech-small-card'

const TechContainer: React.FC = () => {
  const techAreasData = require('../../data/tech-areas.json') as TechAreaType[]
  const techsData = require('../../data/techs.json') as TechType[]

  const showTechAreas = () => {
    return techAreasData.map(tech => {
      return <TechBigCard key={tech.id} tech={tech} />
    })
  }

  const showTechs = () => {
    return techsData.map(tech => {
      return <TechSmallCard key={tech.title} tech={tech} />
    })
  }

  return (
    <Container>
      <BigCardWrapper>{showTechAreas()}</BigCardWrapper>
      <SmallCardWrapper>{showTechs()}</SmallCardWrapper>
    </Container>
  )
}

export default TechContainer
