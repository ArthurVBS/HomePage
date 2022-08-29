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
          link="https://github.com/ArthurVBS/AboutTheBible"
        />
        <RibbonShapeCard
          title="Geography Of Nations"
          content="A website that searches for and displays information about a nation."
          icon="fas fa-globe-americas"
          link="https://github.com/ArthurVBS/GeographyOfNations"
        />
        <RibbonShapeCard
          title="Movie Review"
          content="A movie review site."
          icon="fas fa-star"
          link="https://github.com/ArthurVBS/MovieReview"
        />
        <RibbonShapeCard
          title="Login System"
          content="User authentication system."
          icon="fas fa-sign-in-alt"
          link="https://github.com/ArthurVBS/LoginSystem"
        />
        <RibbonShapeCard
          title="Pixar Video"
          content="A website based on Netflix and Prime Video, but with a Pixar theme."
          icon="fas fa-video"
          link="https://github.com/ArthurVBS/PixarVideo"
        />
        <RibbonShapeCard
          title="Readme Generator"
          content="Readme Generator"
          icon="fas fa-cogs"
          link="https://github.com/ArthurVBS/ReadmeGenerator"
        />
      </WrapperRibbonShapeCards>
    </Container>
  )
}

export default Repo
