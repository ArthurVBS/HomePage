import React from 'react'
import { projectType } from '../../types/projects'
import {
  Container,
  Image,
  ImageBox,
  Description,
  Title,
  Header,
  Content,
  TextBox,
  Tag,
  TagBox,
  LinkBox,
  Link,
} from './styles'

type Props = {
  project: projectType
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const displayTechs = () => {
    return project.techs.map((tech, index) => <Tag key={index}>{tech}</Tag>)
  }

  const displayLinks = () => {
    return (
      <>
        <Link href={project.github.repo} target="_blank">
          <i className="fab fa-github"></i>
        </Link>

        {project.github.website.available && (
          <Link href={project.github.website.url} target="_blank">
            <i className="fas fa-desktop"></i>
          </Link>
        )}
      </>
    )
  }

  return (
    <Container>
      <Header data-aos="fade-up">
        <Title>{project.title}</Title>
      </Header>

      <Content>
        <TextBox>
          <LinkBox data-aos="fade-down">{displayLinks()}</LinkBox>
          <Description data-aos="fade-down">{project.description}</Description>
          <TagBox data-aos="fade-up">{displayTechs()}</TagBox>
        </TextBox>

        <ImageBox data-aos="fade-left">
          <Image src={project.image.src} alt={project.image.alt} />
        </ImageBox>
      </Content>
    </Container>
  )
}

export default ProjectCard
