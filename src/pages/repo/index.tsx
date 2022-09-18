import React from 'react'
import Carousel from '../../components/carousel'
import ProjectCard from '../../components/projectCard'
import { projectType } from '../../types/projects'
import { Container } from './styles'

const Repo: React.FC = () => {
  const projectsData = require('../../data/projects.json') as projectType[]

  const displayProjects = projectsData.map(project => (
    <ProjectCard project={project} key={project.title} />
  ))

  return (
    <Container>
      <Carousel responsive={{ 0: { items: 1 } }}>{displayProjects}</Carousel>
    </Container>
  )
}

export default Repo
