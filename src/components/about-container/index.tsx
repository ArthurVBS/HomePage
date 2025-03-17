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
          I'm Arthur Silva and I'm a developer that love create websites & apis.
          I'm actually based in Recife, Brazil. I'm a Portuguese speaker that
          also speak English and I'm actually improving my French skills.
        </Paragraph>
      </Box>

      <Box>
        <Subtitle>Academy</Subtitle>
        <Paragraph>
          I'm a Systems Analysis and Development student at the Federal
          Institute of Pernambuco, Brazil. Currently I'm finishing my conclusion
          work. I was also a monitor in the Algorithms and Data Structure.
        </Paragraph>
      </Box>

      <Box>
        <Subtitle>Experience</Subtitle>
        <Paragraph>
          I am a Full Stack Software Engineer II & Product Owner at the FADE
          Cin/Motorola project, being responsible for maintaining and adding new
          features to Motorola's internal software. Assuming an important role
          in the scrum methodology and using the stacks: Spring, Java, MySQL,
          AngularJS, VueJS, TypeScript, Google Cloud Platform, Docker.
        </Paragraph>
      </Box>
    </Container>
  )
}

export default AboutContainer
