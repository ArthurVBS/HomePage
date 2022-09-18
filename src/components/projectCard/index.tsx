import React from 'react'
import { projectType } from '../../types/projects'
import {
  Container,
  ContentBox,
  Image,
  ImageBox,
  Description,
  Title,
} from './styles'

type Props = {
  project: projectType
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  console.log(project)

  return (
    <Container>
      <ContentBox>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
      </ContentBox>
      <ImageBox>
        <Image src={project.image.src} alt={project.image.alt} />
      </ImageBox>
    </Container>
  )
}

export default ProjectCard
