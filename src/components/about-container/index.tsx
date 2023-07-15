import React from 'react'
import AboutCard from '../about-card'
import ArrowToBottom from '../arrow-to-bottom'
import { Box, Container, Paragraph, Subtitle } from './styles'

const AboutContainer: React.FC = () => {
  return (
    <Container>
      <AboutCard />
      <ArrowToBottom />

      <Box>
        <Subtitle>About me</Subtitle>
        <Paragraph>
          I'm Arthur Silva and I'm passionate about technology and how it can
          change the world, so I program systems and websites using the
          technology to make lives easier. I'm based on Recife, Brazil.
        </Paragraph>
      </Box>

      <Box>
        <Subtitle>Academy</Subtitle>
        <Paragraph>
          I'm a Systems Analysis and Development student at the Federal
          Institute of Pernambuco, Brazil. Currently I'm in the fifth semester
          and last semester I was a monitor in the Algorithms and Data
          Structure.
        </Paragraph>
      </Box>

      <Box>
        <Subtitle>Experience</Subtitle>
        <Paragraph>
          I am a software developer and maintainer in the Cin/Motorola project,
          being responsible for maintaining and adding new features to
          Motorola's internal software. Assuming an important role in the scrum
          methodology and using the stacks: Spring and AngularJS.
        </Paragraph>
      </Box>
    </Container>
  )
}

export default AboutContainer
