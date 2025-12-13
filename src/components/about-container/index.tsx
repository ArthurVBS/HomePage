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
          I am Arthur Silva, a developer who loves creating websites & applications. I am based in Recife, Brazil - a Portuguese speaker that also speaks English and that is improving the French skill. I am currently open to work in Canada.
        </Paragraph>
      </Box>

      <Box>
        <Subtitle>Academy</Subtitle>
        <Paragraph>
          I am graduated in Systems Analysis and Development at the Federal Institute of Pernambuco, Brazil. Furthermore, I was a monitor in the Algorithms and Data Structure.
        </Paragraph>
      </Box>

      <Box>
        <Subtitle>Experience</Subtitle>
        <Paragraph>
          I am a Full Stack Software Engineer II & Product Owner at the FADE Cin/Motorola project. I'm responsible for the development of Motorola's internal tools, as well as sprint support, tool backlog, automation and CI-CD.
        </Paragraph>
      </Box>
    </Container>
  )
}

export default AboutContainer
