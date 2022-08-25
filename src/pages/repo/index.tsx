import React from 'react'
import RibbonShapeCard from '../../components/ribbonShapeCard'
import { Container, WrapperRibbonShapeCards } from './styles'

const Repo: React.FC = () => {
  return (
    <Container>
      <WrapperRibbonShapeCards>
        <RibbonShapeCard
          title="About The Bible"
          content="A website that displays some information and curiosity from the Bible."
          icon="fas fa-bible"
        />
        <RibbonShapeCard
          title="Geography Of Nations"
          content="A website that searches for and displays information about a nation."
          icon="fas fa-globe-americas"
        />
        <RibbonShapeCard
          title="Movie Review"
          content="A movie review site."
          icon="fas fa-star"
        />
        <RibbonShapeCard
          title="Login System"
          content="User authentication system."
          icon="fas fa-sign-in-alt"
        />
        <RibbonShapeCard
          title="Pixar Video"
          content="A website based on Netflix and Prime Video, but with a Pixar theme."
          icon="fas fa-video"
        />
        <RibbonShapeCard
          title="Readme Generator"
          content="Readme Generator"
          icon="fas fa-cogs"
        />
      </WrapperRibbonShapeCards>
    </Container>
  )
}

export default Repo
