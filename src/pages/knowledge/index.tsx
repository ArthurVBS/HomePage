import React, { useState } from 'react'
import { BackgroundContainer, Container, NavBar, NavItem } from './styles'

import { knowledgeType } from '../../types/knowledge'

const Knowledge: React.FC = () => {
  const knowledgeData = require('../../data/knowledge.json') as knowledgeType[]
  const [data, setData] = useState(knowledgeData[0])

  const displayNavBar = () => {
    return (
      <NavBar>
        {knowledgeData.map((item, index) => {
          return (
            <NavItem onClick={() => setData(item)} key={index}>
              <i className={item.fontAwesomeIcon}></i> <span>|</span>{' '}
              <h3>{item.title}</h3>
            </NavItem>
          )
        })}
      </NavBar>
    )
  }

  return (
    <BackgroundContainer backgroundURL={data.image}>
      <Container>
        {displayNavBar()}
        <h1>Active: {data.title}</h1>
        <ul>
          {data.stack.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Container>
    </BackgroundContainer>
  )
}

export default Knowledge
